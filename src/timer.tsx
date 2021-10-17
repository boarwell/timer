import { h, FunctionComponent } from "preact";
import { useEffect, Reducer, useReducer } from "preact/hooks";

import { tickRAF } from "./util.js";

type Prop = {
  percentage: number;
};

export const Timer: FunctionComponent<Prop> = ({ percentage }) => {
  const radius = 10;
  const arcLength = 2 * Math.PI * radius * percentage;
  const theta = arcLength / radius;
  const largeArcFlag = percentage < 0.5 ? 1 : 0;
  const color = "rebeccapurple";

  const arcX = Math.cos(theta) * radius;
  const arcY = Math.sin(theta) * radius * -1;

  return (
    <svg
      viewBox={`-11 -11 22 22`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ rotate: "-90deg" }}
    >
      {percentage === 0 ? (
        <circle
          cx="0"
          cy="0"
          r={radius}
          fill="none"
          stroke-width="2"
          stroke={color}
        />
      ) : (
        <path
          fill="none"
          stroke={color}
          d={`M ${radius},0 A ${radius} ${radius} 0 ${largeArcFlag} 1 ${arcX} ${arcY}`}
          stroke-width={2}
        />
      )}
      <g fill="none" stroke={color} stroke-width="2">
        <path d="M -4,-4 4,4" />
        <path d="M 4,-4 -4,4" />
      </g>
    </svg>
  );
};

type TimerOption = {
  durationMS: number;
  onTimeIsUP?: () => unknown;
};

type StateLabel = "standby" | "active" | "paused" | "done";

type TimerHandler = {
  percentage: number;
  state: StateLabel;
  start: () => void;
  pause: () => void;
  restart: () => void;
  resume: () => void;
};

type State = {
  label: StateLabel;
  started: number | null;
  percentage: number;
  controller: AbortController;
};

const INITIAL_STATE: State = {
  label: "standby",
  started: null,
  percentage: 0,
  controller: new AbortController(),
};

type Action =
  | { type: "start" }
  | {
      type: "tick";
      payload: {
        percentage: number;
      };
    }
  | { type: "pause" }
  | { type: "resume"; payload: { durationMS: number } }
  | { type: "done" };

const reducer: Reducer<State, Action> = (s, a) => {
  switch (a.type) {
    case "start": {
      return {
        ...s,
        label: "active",
        percentage: 0,
        started: Date.now(),
        controller: new AbortController(),
      };
    }

    case "tick": {
      if (s.label !== "active") {
        return s;
      }

      return { ...s, percentage: a.payload.percentage };
    }

    case "pause": {
      if (s.label !== "active") {
        return s;
      }

      s.controller.abort();
      return { ...s, label: "paused" };
    }

    case "resume": {
      if (s.label !== "paused") {
        return s;
      }

      return {
        ...s,
        label: "active",
        started: Date.now() - a.payload.durationMS * s.percentage,
        controller: new AbortController(),
      };
    }

    case "done": {
      if (s.label !== "active") {
        return s;
      }

      s.controller.abort();
      return { ...s, label: "done", percentage: 1 };
    }
  }

  return s;
};

export const useTimer = ({
  durationMS,
  onTimeIsUP,
}: TimerOption): TimerHandler => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    if (state.label === "active") {
      (async () => {
        for await (const _ of tickRAF(state.controller)) {
          const elapsedMS = Date.now() - state.started;
          const percentage = Math.min(elapsedMS / durationMS, 1);

          if (percentage === 1) {
            dispatch({ type: "done" });
            onTimeIsUP && onTimeIsUP();
            break;
          }

          dispatch({
            type: "tick",
            payload: { percentage },
          });
        }
      })();
    }

    return () => {
      state.controller.abort();
    };
  }, [state.label]);

  const start = () => {
    dispatch({ type: "start" });
  };

  const pause = () => {
    dispatch({ type: "pause" });
  };

  const resume = () => {
    dispatch({ type: "resume", payload: { durationMS } });
  };

  const restart = () => {
    dispatch({ type: "start" });
  };

  return {
    percentage: state.percentage,
    state: state.label,
    start,
    pause,
    restart,
    resume,
  };
};
