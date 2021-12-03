import React, {Component} from 'react';
import './App.css';
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFetchUsers';

const API = 'https://randomuser.me/api/?results=5';

class App extends Component {

  state = {
    users: null
  }

  handleDataFetch = () => {
    fetch(API) 
     .then((response:any) => {
       if(response.ok) {
         console.log(response);
       return response;
       
       }throw Error(response.status)}).then((response:any) => response.json())
       .then(data => this.setState({
             users: data.results
        }))
        }

  //     throw Error(response.status)
  //   })
    
  //   .then(data => this.setState({
  //     users: data.results
  //   }))
  //   .catch()(error => console.log(error + 'coś nie tak'))
  // }


  //this.setState(prevState => ({
    //tasks: [...prevState.tasks, task]
  //}))
  render () {
    const users = this.state.users; 

  return (
    <div>
      <ButtonFetchUsers click={this.handleDataFetch}/>
      {users ? <UsersList users={users} /> : users}
    </div>
  );
  }
}



export default App;
