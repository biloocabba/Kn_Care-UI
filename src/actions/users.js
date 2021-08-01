import { REMOVE_EMPLOYEE, RETRIEVE_EMPLOYEES} from "./types/user"


export const removeEmployee = (id) => {
    return {type: REMOVE_EMPLOYEE, payload: id }
}

export const reterieveEmployees = () => {
    return {type: RETRIEVE_EMPLOYEES, payload: ''}
}