import http from "../http-common";

const getAllCareMembers = () => {
  return http.get("/careMembers");
};

const searchCareMembers = (queryParams) => {
  return http.get(`/careMembers?${queryParams}`);
};

const careMembersService = {
  getAllCareMembers,
  searchCareMembers
};
  
export default careMembersService;