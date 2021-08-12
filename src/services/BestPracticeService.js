import http from './http-common'

const getAll = () => {
  return http.get('/best-practices')
}

const bestPracticeService = {
  getAll
}
export default bestPracticeService
