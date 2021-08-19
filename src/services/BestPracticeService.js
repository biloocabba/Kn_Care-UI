import http from './http-common'

const getAll = () => {
  return http.get('/best-practices')
}

const search = (queryParams) => {
  return http.get(`/best-practices?${queryParams}`);
}

const bestPracticeService = {
  getAll,
 search,
}
export default bestPracticeService
