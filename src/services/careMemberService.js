import http from './http-common'
import { careMembersData } from '../mock-data/careMembers.js'


const getAllCareMembers = () => {
  return {
    data:careMembersData
  };
};

const searchCareMembers = (queryParams) => {

  let result= careMembersData.filter((careMember) => {
    return (careMember.country===queryParams.get('countryId'))        
  })
  return {
    data:result
  }; 
};

const create = (member) => {
  careMembersData.push(member);
  return {data:member}
}

const getByRegion = region => {
  return http.get(`/members/region=${region}`)
}

/**  */
/*
const getAllCareMembers = () => {
  return http.get("/care-members");
};

const searchCareMembers = (queryParams) => {
  return http.get(`/care-members?${queryParams}`);
};

const create = (data) => {
  return http.post('/care-members/', data)
}

const getByRegion = region => {
  return http.get(`/members/region=${region}`)
}

*/


const careMemberService = {
  create,
  getAllCareMembers,
  searchCareMembers
}



export default careMemberService
