import { EXAMPLE_SCREEN } from '../types';
const initialState = {
data: null
};
const ExampleReducer = (state = initialState, action) => {
switch(action.type) {
case EXAMPLE_SCREEN:
return {
...state,
data:action.payload
};
default:
return state;
}
}
export default ExampleReducer;