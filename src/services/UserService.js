import http from '../http-common'

const getAll = () => {
  return http.get('/employees')
}

const create = (data) => {
  return http.post('/members/', data)
}

const UserService = {
  getAll,
  create,
}

export default UserService
