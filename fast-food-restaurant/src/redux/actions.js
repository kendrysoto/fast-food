import * as types from './action-types';

const setFood = (value) => ({
  type: types.SET_FOOD,
  value,
});

const setPeople = (value) => ({
  type: types.SET_PEOPLE,
  value,
});

const setQuantity = () => ({
  type: types.SET_QUANTITY,
});

export { setFood, setPeople, setQuantity };