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

const findByCompanyCode = companyCode => {
  return http.get(`/careMembers?companyCode=${companyCode}`);
};

const findByCountry = country => {
  return http.get(`/careMembers?country=${country}`);
};

const findByOnBoardDate = onBoardDate => {
  return http.get(`/careMembers?onboardingDate=${onBoardDate}`);
};

const careMembersService = {
  getAllCareMembers,
  findByInternationalName,
  findByBusinessUnit,
  findByCompanyCode,
  findByCountry,
  findByOnBoardDate
};
  
export default careMembersService;