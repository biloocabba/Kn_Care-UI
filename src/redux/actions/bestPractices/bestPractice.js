import {
    CREATE_BEST_PRACTICE,
    RETRIEVE_BEST_PRACTICES,
    UPDATE_BEST_PRACTICE,
    DELETE_BEST_PRACTICE,
    RETRIEVE_SINGLE_BEST_PRACTICE
} from "./types";

import BestPracticeService from "../../services/BestPracticeService";

export const createBestPractice = (title, description, content) => async (dispatch) => {
    try {
        const res = await BestPracticeService.create({ title, description, content });

        dispatch({
            type: CREATE_BEST_PRACTICE,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveBestPractices = () => async (dispatch) => {
    try {
        const res = await BestPracticeService.getAll();

        dispatch({
            type: RETRIEVE_BEST_PRACTICES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveSingleBestPractice = (id) => async (dispatch) => {
    try {
        const res = await BestPracticeService.get(id);

        dispatch({
            type: RETRIEVE_SINGLE_BEST_PRACTICE,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateBestPractice = (id, data) => async (dispatch) => {
    try {
        const res = await BestPracticeService.update(id, data);

        dispatch({
            type: UPDATE_BEST_PRACTICE,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteBestPractice = (id) => async (dispatch) => {
    try {
        await BestPracticeService.remove(id);

        dispatch({
            type: DELETE_BEST_PRACTICE,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};