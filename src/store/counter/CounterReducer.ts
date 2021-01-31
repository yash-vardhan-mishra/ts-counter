import { Action, Reducer } from "redux";
import {
  CounterActionTypes,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "./models/actions";
import { Counter } from "./models/Counter";

const defaultState: Counter = {
  count: 0,
};

export const counterReducer: Reducer<Counter, Action> = (
  state = defaultState,
  action: CounterActionTypes
) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
