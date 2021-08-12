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

const saveAsDraft = (emailId, memberId) => {
    return http.post("emails/:emailId/participants/:memberId",undefined,{
        params: {
            emailId: emailId,
            memberId: memberId
        }
    });
};

const EmailService = {
    getAll,
    getOne,
    saveAsDraft,
    sendMail
};

export default EmailService;