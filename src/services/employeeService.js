import http from './http-common'

const getAllEmployees = () => {
  return http.get('/employees')
}

const searchEmployees = (queryParams) => {
  return http.get(`/employees?${queryParams}`);
};

const employeeService = {
  getAllEmployees,
  searchEmployees
};

export default employeeService
