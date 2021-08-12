import http from './http-common'

const getAll = () => {
  return http.get('/employees')
}


const employeeService = {
  getAll, 
}

export default employeeService
