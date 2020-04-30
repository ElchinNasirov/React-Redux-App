import {
    FETCHING_IMAGE_START,
    FETCHING_IMAGE_SUCCESS,
    FETCHING_IMAGE_FAILURE
} from "../actions";

const initialState = {
    isFetching: false,
    pic: null,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCHING_IMAGE_START:
            return {
                ...state,
                isFetching: true
            };

        case FETCHING_IMAGE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                pic: action.payload
            }

        case FETCHING_IMAGE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: "Error... Couldn't get the image"
            }
        default:
            return state;
    }
}