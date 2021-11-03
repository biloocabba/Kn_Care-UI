import http from './http-common';
import { careMembersData } from '../mock-data/careMembers.js';
// import {
//   addLastNameFilter,
//   addCountryFilter,
//   addBusinessUnitFilter,
// } from 'utils/filters';
// import { fetchFilteredData } from 'utils/queries';

// this search logic is now in searchWithFilters.js function
// const searchCareMembers = async queryParams => {
//   const lastName = addLastNameFilter(queryParams.get('lastName'));
//   const country = addCountryFilter(queryParams.get('countryId'));
//   const businessUnit = await addBusinessUnitFilter(
//     queryParams.get('businessUnitId'),
//   );

//   const params = {
//     lastName,
//     country,
//     businessUnit,
//   };

//   const { data } = await fetchFilteredData('*', 'careMembers', params);

//   return {
//     data,
//   };
// };

const create = member => {
  careMembersData.push(member);
  return { data: member };
};

const getByRegion = region => {
  return http.get(`/members/region=${region}`);
};

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
  // searchCareMembers,
  getByRegion,
};

export default careMemberService;
