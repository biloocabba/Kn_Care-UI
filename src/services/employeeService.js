import http from './http-common'

const getAll = () => {
  return http.get('/employees')
}

const findByInternationalName = internationalName => {
  return http.get(`/employees?internationalName=${internationalName}`);
};

const findByBusinessUnit = businessUnit => {
  return http.get(`/employees?businessUnit=${businessUnit}`);
};

const findByCompanyCode = companyCode => {
  return http.get(`/employees?companyCode=${companyCode}`);
};

const findByCountry = country => {
  return http.get(`/employees?country=${country}`);
};

const findByHiringDate = hiringDate => {
  return http.get(`/employees?hiringDate=${hiringDate}`);
};

const employeeService = {
  getAll,
  findByInternationalName,
  findByBusinessUnit,
  findByCompanyCode,
  findByCountry,
  findByHiringDate
}

export default employeeService
