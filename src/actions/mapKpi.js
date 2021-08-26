import mapKpiService from "../services/mapKpiService";

export const getMapData = (action) => async (dispatch) => {
    try {
        const res = await mapKpiService.getAll();
        dispatch({
            type: action,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
};