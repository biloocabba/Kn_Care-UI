import http from '../http-common'

const getAll = () => {
  return http.get('/bestPractices')
}

const BestPracticeService = {
  getAll
}
export default BestPracticeService
