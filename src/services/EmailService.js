import http from "../utils/http-common.js";

const getAll = () => {
    return http.get("/emails");
};

const getOne = id => {
    return http.get("/emails/" + id);
}

const sendMail = email => {
    console.log("sending not yet implemented at the backend");
}

const saveAsDraft = (emailState) => {
    return http.post("emails",emailState);
};

const emailService = {
    getAll,
    getOne,
    saveAsDraft,
    sendMail
};

export default emailService;