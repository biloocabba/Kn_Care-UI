import http from "../http-common";

const getAll = () => {
    return http.get("/employees")
  };
  
  const UserService = {
    getAll
  };
  
  export default UserService;