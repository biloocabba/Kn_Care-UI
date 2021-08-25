import initialState from "initialStates/mapKpi";

export const getMapData = (action) => async (dispatch) => {

    var mapData = {};

    try {

        dispatch({
            type: action,
            payload: initialState
        });
        
        return Promise.resolve(mapData);

    } catch (e) {
        console.log(e)
        return Promise.reject(e);
    }
}