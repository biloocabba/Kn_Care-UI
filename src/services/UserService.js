import http from '../http-common'

const getAll = () => {
  return http.get('/employees')
}

const create = () => {
  return http.post('/members')
}

const UserService = {
  getAll,
  create,
}

export default UserService
