import http from "../http-common";

const getAll = () => {
    return http.get("/emails");
};

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
    saveAsDraft
};

export default EmailService;