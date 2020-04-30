import axios from "axios";

// actions
export const FETCHING_IMAGE_START = "FETCHING_IMAGE_START";
export const FETCHING_IMAGE_SUCCESS = "FETCHING_IMAGE_SUCCESS";
export const FETCHING_IMAGE_FAILURE = "FETCHING_IMAGE_FAILURE";

// action creators
export const getImage = () => (dispatch) => {
    dispatch({ type: FETCHING_IMAGE_START });

    axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then(res => {
            dispatch({
                type: FETCHING_IMAGE_SUCCESS,
                payload: res.data.message
            })
        })
        .catch(err => {
            dispatch({
                type: FETCHING_IMAGE_FAILURE,
                payload: `${err.status}`
            })
        })
}