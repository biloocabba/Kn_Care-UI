import {
    CREATE_ROLE,
    DEACTIVATE_ROLE,
    EDIT_ROLE,
    RETRIEVE_ROLES
} from "./types";

import roleService from "../services/roleServie"

export const createRole = (data) => {
    console.log(data)
    return { type: CREATE_ROLE, payload: data }
}


export const updateRole = (id, data) => {
    return { type: EDIT_ROLE, payload: id, data }
}

export const deleteRole = (id) => {
    return { type: DEACTIVATE_ROLE, payload: { id } }
}

export const retrieveRoles = () => async (dispatch) => {
    try {
        const res = await roleService.getAll();
        dispatch({ type: RETRIEVE_ROLES, payload: res.data })
    } catch (error) {
        console.log(error)
    }
}

