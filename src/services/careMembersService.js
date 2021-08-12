import http from "../http-common";

const getAllCareMembers = () => {
  return http.get("/careMembers");
};

const findByInternationalName = internationalName => {
    return http.get(`/careMembers?internationalName=${internationalName}`);
};

const findByBusinessUnit = businessUnit => {
  return http.get(`/careMembers?businessUnit=${businessUnit}`);
};

const findByCostCenter = costCenter => {
  return http.get(`/careMembers?costCenter=${costCenter}`);
};

const findByCountry = country => {
  return http.get(`/careMembers?country=${country}`);
};

const careMembersService = {
  getAllCareMembers,
  findByInternationalName,
  findByBusinessUnit,
  findByCostCenter,
  findByCountry
};
  
export default careMembersService;