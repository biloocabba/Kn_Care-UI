import http from './http-common'
import { careMembersData } from '../mock-data/careMembers.js'
import { categoriesData } from '../mock-data/categories.js'

const getAllCareMembers = () => {
  return {
    data:careMembersData
  };
};

const searchCareMembers = (queryParams) => {

  let result= careMembersData.filter((careMember) => {
   
    /*
      if (queryParams && queryParams.get('lastName') && 
        careMember.lastName!==queryParams.get('lastName')){
        return false;
      }

      if (queryParams && queryParams.get('countryId')){ 
        const countryCode = queryParams.get('countryId')
        const countryObj =categoriesData.countryListAllIsoData.find(country => country.code3===countryCode)

        if(careMember.country!==countryObj.name){
          return false;
        }            
      }

      if (queryParams && queryParams.get('businessUnitId')) {
        const bunitId =parseInt(queryParams.get('businessUnitId'));
        const businessUnitObj =categoriesData.businessUnits.find(bunit => bunit.id===bunitId);     

        if(careMember.businessUnit!==businessUnitObj.name){
          return false;
        }        
      }
      */
      return true
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
