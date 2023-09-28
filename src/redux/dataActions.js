// dataActions.js
import axios from "axios";

export const fetchData = () => async (dispatch) => {
    try {
        const response = await axios.get("https://checkinsta.herokuapp.com/check_upk/safridiofficial?get_posts=true");
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
};
