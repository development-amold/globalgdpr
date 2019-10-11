import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from "@material-ui/core/FormControl";

function SelectTag(props){
  const countries_list = [{name: 'India', code: 'IN'},{name: 'United States', code: "US"}, 
    {name:'United Kingdom', code: "GB"}]
  let countries_option = [<MenuItem key="" value="" disabled>Select Country</MenuItem>];
  countries_list.map((item,index) => 
    countries_option.push(<MenuItem key={index} value={item.code}>{item.name}</MenuItem>)
  );

  const [values, setValues] = React.useState({
    country: "GB",
  });
  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };  
  return(
    <FormControl className="margin: theme.spacing(1),minWidth: 120">
      <Select value={values.country} name="country" displayEmpty className="marginTop: theme.spacing(2)" 
        onChange={handleChange}
      >
        {countries_option}
      </Select>
    </FormControl>
  )
}

export default SelectTag;