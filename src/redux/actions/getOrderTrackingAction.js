import { fetchEventSource } from '@microsoft/fetch-event-source';
import * as actionTypes from '../constants/trackingConstant.js';

export const getTrackings = (code) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_TRACKING_REQUEST
        });

        await fetchEventSource(`/api/task-service/get_order_detail/${code}`, {
            method: "GET",
            headers: {
                Accept: 'text/event-stream',
            },

            onmessage(event) {
                const data = JSON.parse(event.data);
                dispatch({
                    type: actionTypes.GET_TRACKING_SUCCESS,
                    payload: data
                })
            },
            onclose() {
                console.log("Connection closed by the server");
            },
            onerror(err) {
                console.log("There was an error from server", err);
            },
        });


    } catch (error) {
        dispatch({
            type: actionTypes.GET_TRACKING_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
}