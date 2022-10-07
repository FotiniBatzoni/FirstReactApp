import React, {Component} from 'react';
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    //state
    this.state = {
      users: []
    }
  }

  getusers(){
    axios('https://api.randomuser.me/?nat=US&result=5')
    .then(response => this.setState({
      users: response.data.results
    }))
  }

  componentWillMount(){
    this.getusers();
  }

  render(){
    return <div className="App">
      {this.state.users.map(user => 
      <div>
        <h3>{user.name.first}</h3>
        <p>{user.email}</p>
        <hr/>
      </div> 
      )}
    </div>
  } 
}

export default App;
