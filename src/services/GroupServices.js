import http from "../http-common";


const getAll = () => {
  return http.get("/groups")
}

const get = id => {
  return http.get(`/groups/${id}`)
}

const create = data => {
  return http.post("/new-group/", data);

}

const update = (id, data) => {

  return http.put(`/groups/${id}`, data);

}

const remove = id => {

  return http.delete(`/groups/${id}`);

}

const removeAll = () => {

  return http.delete(`/groups`);

}

// const findUserByUserName = userName => {
//   return http.get(`/groups?userName=${userName}`);

// }



const GroupService = {

  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
}

export default GroupService;