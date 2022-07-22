import {createStore, combineReducers} from 'redux';
import ExampleReducer from '../redux/reducer/ExampleReducer';
const rootReducer = combineReducers({data: ExampleReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
