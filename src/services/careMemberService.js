import http from './http-common'


const create = (data) => {
  return http.post('/members/', data)
}

const careMemberService = {
  create,
}

const getByRegion = region => {
  return http.get(`/members/region=${region}`)
}

export default careMemberService
