import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./models/actions";

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});
