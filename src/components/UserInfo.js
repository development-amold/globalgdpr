import React from 'react';
import TableComponent from './utilities/TableComponent';

function filter_users(countries_users, country_code){
  let filtered_users = "";
  switch (country_code){
    case "IN":
      filtered_users = countries_users.IN
      break;
    case "US":
      filtered_users = countries_users.US
      break;
    case "GB":
      filtered_users = countries_users.GB
      break;
    default:
      filtered_users = countries_users.IN

  }  
  // const users_element = null;
  // filter_users(country_users, props.country_code).map(item => {
  //   users_element <li>{item}</li>
  //   }
  // )

  return filtered_users;
}

function UserInfo(props){
  const country_users = {
    IN: [
      {firstName:"Ram",lastName:"RamLast", email:"ram@ram.com", code: "IN" },
      {firstName:"Smith",code: "US"},
      {firstName:"John",lastName:"JohnLast",code: "GB"}
    ],
    US: [
      {firstName:"Ram",lastName:"RamLast", email:"ram@ram.com", code: "IN" },
      {firstName:"Smith",lastName:"SmithLastName",email:"smith@smith.com", code: "US"},
      {firstName:"John",code: "GB"}
    ],
    GB:[
      {firstName:"Ram",lastName:"RamLast", email:"ram@ram.com", code: "IN" },
      {firstName:"Smith",code: "US"},
      {firstName:"John",lastName:"JohnLast",email:"john@john.com",code: "GB" }
    ]
  }

  return(
    <TableComponent theader={['First Name', 'Last Name', 'Email', 
      'Country Code']} 
      tbody={filter_users(country_users, props.country_code)} 
    />
  )
}

export default UserInfo;