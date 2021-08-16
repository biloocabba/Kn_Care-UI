import http from './http-common'

const getAll = () => {
  return http.get('/best-practices')
}

const findByTime = (time) => {
  return http.get(`/best-practices?time=${time}`);
}

const findByAuthor = (author) => {
  return http.get(`/best-practices?author=${author}`);
}

const findByTag = (tag) => {
  return http.get(`/best-practices?tag=${tag}`);
}

const findByRate = (rate) => {
  return http.get(`/best-practices?rate=${rate}`);
}

const findByTitle = (title) => {
  return http.get(`/best-practices?title=${title}`);
}

const bestPracticeService = {
  getAll,
  findByTime,
  findByAuthor,
  findByTag,
  findByRate,
  findByTitle
}
export default bestPracticeService
