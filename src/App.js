import React, {Component} from 'react';
import axios from 'axios'
import Loading from './Loading';


class App extends Component {
  constructor(props) {
    super(props)
    //state
    this.state = {
      users: [],
      loading: false
    }
  }

  getusers(){
    this.setState({
      loading: true
    })
    axios('https://api.randomuser.me/?nat=US&result=5')
    .then(response => this.setState({
      users: response.data.results,
      loading: false
    }))
  }

  componentWillMount(){
    this.getusers();
  }

  render(){
    return <div className="App">
      {!this.state.loading ?
       this.state.users.map(user => 
      <div>
        <h3>{user.name.first}</h3>
        <p>{user.email}</p>
        <hr/>
      </div> 
      ) : <Loading message='Hey Hey Hey'/>}
    </div>
  } 
}

export default App;
