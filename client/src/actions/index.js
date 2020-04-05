import axios from "axios";
import {FETCH_USER} from "./types";

// export const fetchUser = () => {
//	// if action creator returns a function, redux-thunk will call it automatically with dispatch()
// 	return function (dispatch) {
// 		axios
// 			.get("/api/current_user")
// 			.then(res => dispatch({type: FETCH_USER, payload: res}));
// 	};
// };

//Same as line 4-11 function using ES6 syntax
export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");
	dispatch({type: FETCH_USER, payload: res.data});
};
