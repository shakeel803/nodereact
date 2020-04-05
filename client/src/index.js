import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";

//Imports to wireup redux
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

import App from "./components/App";
import combineReducers from "./reducers";

//createStore(@rootReducer, @initialState, @applyMiddleware(@middleware))
const store = createStore(combineReducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
