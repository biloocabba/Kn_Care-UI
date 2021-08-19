import http from './http-common'

const getAll = () => {
  return http.get('/best-practices')
}

const search = (params) => {
  return http.get(`/best-practices?param=${params}`);
}

const bestPracticeService = {
  getAll,
 search,
}
export default bestPracticeService
