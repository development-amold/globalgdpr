import React, {Component} from 'react';
import axios from "axios";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UserInfo from './UserInfo';
import SelectTag from './utilities/SelectTag';
import SelectTag2 from './utilities/SelectTag2';
import IPResponse from './IPResponse';


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
//   // control: {
//   //   padding: theme.spacing(2),
//   // },
// }));

export class Home extends Component {
  constructor(){
    super();
    this.state={
      userGeoInfo:[],
      is_location_allow: false,
      current_ip: null
    };
    // this.getLocation = this.getLocation.bind(this);
    // this.positionError = this.positionError.bind(this);
    // this.showPosition = this.showPosition.bind(this);
    this.setIPStack = this.setIPStack.bind(this);
 
    // const spacing = React.useState(2);
    // const classes = useStyles();   
  
  }

  componentDidMount(){
    // this.getLocation();
    let confirmDiaglog = window.confirm('We use your IP address to better understand your needs, improve performance and provide you with personalised content and advertisements. To allow us to provide a better and more tailored experience, please click the "OK" Button.'); 
    if (confirmDiaglog){
      // debugger;
      this.setIPStack();
    }
  }

  setIPStack = () => {
    let compDidThis = this;
    axios.get(`https://api.ipify.org/?format=json`,{}).then((resp)=>{
      if(resp.data.ip){
        compDidThis.setState({current_ip: resp.data.ip})
        // ${resp.data.ip}
        axios.get(`http://api.ipstack.com/${resp.data.ip}?access_key=3de0bfc53900d0a8fc9318984591c714`,{}).then((res)=>{
          compDidThis.setState({userGeoInfo:res.data});
        }).catch((error)=>{
          alert("There is an error in API call.");
        });
      }
    }).catch((error)=>{
      alert("There is an error in API call.");
    })    
  }

  homehandleChange = (selectedipAdd) => {
    let compDidThis = this;
    this.setState({current_ip: selectedipAdd});
    axios.get(`http://api.ipstack.com/${selectedipAdd}?access_key=3de0bfc53900d0a8fc9318984591c714`,{}).then((res)=>{
      compDidThis.setState({userGeoInfo:res.data});
    }).catch((error)=>{
      alert("There is an error in API call.");
    });
  }
  
  render(){
    if (this.state.current_ip){
      return(
        <div>
          <Container maxWidth="lg">
            <Typography component="div" style={{height: '100vh' }}>
              <Grid container direction="column" alignItems="center">  
                <Grid item xs={3}>
                    <SelectTag2 handleChange={this.homehandleChange} selected_country_code={this.state.userGeoInfo.country_code} />
                </Grid>              
              </Grid>
              {/* <p>{this.state.current_ip}</p> */}
              <hr></hr>
              <Grid container className="flexgrow:1" spacing={2}>
                <Grid item xs={6}>
                  <IPResponse userGeoInfo_json={this.state.userGeoInfo}/>
                </Grid>

                <Grid item xs={6}>
                  <UserInfo country_code={this.state.userGeoInfo.country_code} />
                </Grid>

              </Grid>

            </Typography>
          </Container>
        </div>
      );
    }
    else{
      return (
        <Container maxWidth="lg"><p>You are denied to access the content.</p></Container>
      );
    }
  }
}