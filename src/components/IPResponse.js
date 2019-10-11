import React from 'react';

function IPResponse(props){
  return(
    <div>
      <li>My IP: {props.userGeoInfo_json.ip}</li>
      <li>Country: {props.userGeoInfo_json.country_name}</li>    
      <pre><strong>Data:</strong> {JSON.stringify(props.userGeoInfo_json, null, 2)}</pre>       
    </div>  
  )
}

export default IPResponse;