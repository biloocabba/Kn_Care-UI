// import {
//   addCountryFilter,
//   addLastNameFilter,
//   addBusinessUnitFilter,
// } from 'utils/filters';
// import { fetchFilteredData } from 'utils/queries';

// const searchEmployees = async queryParams => {
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

//   const { data } = await fetchFilteredData('*', 'employees', params);

//   return { data };
// };

// const employeeService = {
//   searchEmployees,
// };

// export default employeeService;

/** real implementation */
/*
const getAllEmployees = () => {
  return http.get('/employees')
}

const searchEmployees = (queryParams) => {
  return http.get(`/employees?${queryParams}`);
};
*/
