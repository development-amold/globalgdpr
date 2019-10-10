import React, {Component} from 'react';
import axios from "axios";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  // control: {
  //   padding: theme.spacing(2),
  // },
}));

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
 
    // const spacing = React.useState(2);
    // const classes = useStyles();   
  
  }




  
  componentDidMount(){
    // this.getLocation();

    let compDidThis = this;
    let confirmDiaglog = window.confirm('We use your IP address to better understand your needs, improve performance and provide you with personalised content and advertisements. To allow us to provide a better and more tailored experience, please click the "OK" Button.');
    if (confirmDiaglog){
      // debugger;
      axios.get(`https://api.ipify.org/?format=json`,{}).then((resp)=>{
        if(resp.data.ip){
          compDidThis.setState({current_ip: resp.data.ip})
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
  }
  
  render(){
    let is_allowed = this.state.is_location_allow;
    if (this.state.current_ip){
      return(
        <div>
          <Container maxWidth="lg">
            <Typography component="div" style={{height: '100vh' }} >
              <Grid container className="flexgrow:1" spacing={2}>
                <Grid item xs={6}>
                  <li>My IP: {this.state.current_ip}</li>
                  <li>Country: {this.state.userGeoInfo.country_name}</li>
                  <pre><strong>Data:</strong> {JSON.stringify(this.state.userGeoInfo, null, 2)}</pre>                  
                </Grid>

                <Grid item xs={6}>
                  ACTUAL USER INFO
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