import * as actionTypes from '../constants/trackingConstant.js';

export const getAllTrackingReducer = (state = { trackings: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_TRACKING_REQUEST:
            return {
                loading: true,
                trackings: []
            }
        case actionTypes.GET_TRACKING_SUCCESS:
            return {
                loading: false,
                trackings: action.payload
            }
        case actionTypes.GET_TRACKING_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}