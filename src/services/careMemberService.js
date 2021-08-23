import http from './http-common'


const create = (data) => {
  return http.post('/members/', data)
}

const careMemberService = {
  create,
}

export default careMemberService
