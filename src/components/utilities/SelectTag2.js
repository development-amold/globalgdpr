import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from "@material-ui/core/FormControl";

export class SelectTag2 extends Component{
  constructor(){
    super(); 
    this.state = {
      selected_country_code: "",
      countries_list: [{name: 'India', code: 'IN', ipAdd: '115.113.153.34'},
      {name: 'United States', code: "US", ipAdd: '104.236.48.178'}, 
      {name:'United Kingdom', code: "GB", ipAdd: '176.58.114.90'}]
    };
    this.handleChange = this.handleChange.bind(this);
    this.countries_option = this.countries_option.bind(this);
  }

  static getDerivedStateFromProps(props, current_state) {
    if (!current_state.selected_country_code) {
      return { //only first time page reloads
        selected_country_code: props.selected_country_code,
      }
    }
    return null;
  }

  handleChange = event => {
    let ipAdd = "";
    switch (event.target.value){
      case "IN":
        ipAdd = this.state.countries_list[0].ipAdd;
        break;
      case "US":
        ipAdd = this.state.countries_list[1].ipAdd
        break;
      case "GB":
        ipAdd = this.state.countries_list[2].ipAdd
        break;
      default:
        ipAdd = this.state.countries_list[0].ipAdd;

    }
    this.props.handleChange(ipAdd);
    this.setState({selected_country_code: event.target.value});
  };

  countries_option = () => {
    let countries_option = []
    this.state.countries_list.map((item,index) => 
      countries_option.push(<MenuItem key={index} value={item.code}>{item.name}</MenuItem>)
    );
    return (countries_option)
  }

  render(){
    return(
      
      <FormControl className="margin: theme.spacing(1),minWidth: 120">
        <br></br>
        {/* <p>PROPS: {this.props.selected_country_code}</p><p>-STATE----{this.state.selected_country_code}</p> */}
        <select value={this.state.selected_country_code} name="country" className="marginTop: theme.spacing(12)" 
          onChange={this.handleChange} >
            <option key="" value="">Select Country</option>
          {
            this.state.countries_list.map((item,index) => 
            <option key={item.code} value={item.code}>{item.name}</option>)
          }
        </select>
      </FormControl>
    )  
  }







}

export default SelectTag2;