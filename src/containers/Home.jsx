import React, {Component} from 'react';
// const axios = require('axios');
import qs from 'qs';

class Home extends Component{
  constructor(props){
    super(props)

    this.state = {
      response: ""
    }
  }
  componentWillMount(){

    // const options = {
    //   method: 'GET',
    //   headers: { 'content-type': 'application/x-www-form-urlencoded'},
    //   url: 'http://18.216.134.103:4001/',
    // };
    // axios(options)
    // .then(res => {
    //   console.log(res.data);
    //   this.setState({response: res.data.response})
    // })
    // .catch(error => {
    //   console.log(error.response)
    // });

  }
  render(){
    return(
      <div>
        <h2>Home Page</h2>
        {this.state.response}
      </div>

    )
  }
}

export default Home;
