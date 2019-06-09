import React from 'react';
import PlayerStats from './PlayerStats';


class SearchPlayer extends React.Component {
  state = {
    showStats: true,
    nickName: '',
    uid: ''

  };

  componentDidMount() {

  }
  

  handleValueChange = (event) => {
    this.setState({nickName: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchPlayerID(this.fetchPlayerStats);
  }



  fetchPlayerID = (callback) => {
    const settings = {
      "headers": {
        "Authorization": "34d68b148e30d7f7a4e608d9baba7b92"
      },
    };
    const url = `https://fortnite-api.theapinetwork.com/users/id?username=${encodeURIComponent(this.state.nickName)}`;
    fetch(url, settings)
      .then(response => response.json())
      .then(data => {
        this.setState({uid: data.data.uid});
        
      })
      callback();
  }

  fetchPlayerStats = () => {
    const settings = {
      "headers": {
        "Authorization": "34d68b148e30d7f7a4e608d9baba7b92"
      },
    };
    const url = `https://fortnite-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${this.state.uid}&platform=pc`;
    fetch(url, settings)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" type="text" value={this.state.nickName} onChange={this.handleValueChange} placeholder="Player Nickname here.." required></input>
          <button className="btn btn-outline-success my-2" type="submit">Search</button>
        </form>
        <PlayerStats 
          nickName={this.state.nickName}
          uid={this.state.uid}
        />
      </React.Fragment>
    );
  }

}



export default SearchPlayer;