import http from "../http-common";

const getAll = () => {
    return http.get("/emails");
};

const getOne = id => {
    return http.get("/emails/" + id);
}

const sendMail = email => {
    console.log("sending not yet implemented at the backend");
}

const EmailService = {
    getAll,
    getOne,
    sendMail
};

export default EmailService;