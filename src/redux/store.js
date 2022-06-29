import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import { getAllTrackingReducer} from "./reducers/trackingReducer.js";

const reducer = combineReducers({
    getTrackings: getAllTrackingReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;