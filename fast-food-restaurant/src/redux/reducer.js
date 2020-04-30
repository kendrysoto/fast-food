import * as types from './action-types';

const initialState = {
  people: 0,
  quantity: 0,
  food: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FOOD:
      return {
        ...state,
        food: action.value,
      };
    case types.SET_PEOPLE:
      return {
        ...state,
        people: action.value,
      };
    case types.SET_QUANTITY:
      return {
        ...state,
        quantity: (state.people / state.food) 
      };
    default:
      return state;
  }
};

export default reducer;