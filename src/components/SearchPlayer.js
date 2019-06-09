import React from 'react';
import PlayerStats from './PlayerStats';


class SearchPlayer extends React.Component {
  state = {
    showStats: false,
    isLoading: true,
    nickName: '',
    uid: '',
    Stats: {
      username: '',
      matchesplayed: 0,
      kills: 0,
      kd: 0,
      wins: 0,
      winrate: 0
    }

  };

  componentDidMount() {

  }


  handleValueChange = (event) => {
    this.setState({ nickName: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showStats: true });
    this.fetchPlayerID();
  }

  closeStats = () => {
    this.setState({showStats: false});
  }



  fetchPlayerID = () => {
    const settings = {
      "headers": {
        "Authorization": "34d68b148e30d7f7a4e608d9baba7b92"
      },
    };
    const url = `https://fortnite-api.theapinetwork.com/users/id?username=${encodeURIComponent(this.state.nickName)}`;
    fetch(url, settings)
      .then(response => response.json())
      .then(data => {
        this.setState({ uid: data.data.uid });
        this.fetchPlayerStats();

      })
      .catch(err => console.log(err))
      
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
        this.setState({
          Stats: {
            username: data.username,
            matchesplayed: data.totals.matchesplayed,
            kills: data.totals.kills,
            kd: data.totals.kd,
            wins: data.totals.wins,
            winrate: data.totals.winrate

          }
        });
      })
      .then(this.setState({isLoading: false}))
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" type="text" value={this.state.nickName} onChange={this.handleValueChange} placeholder="Player Nickname here.." required></input>
          <button className="btn btn-outline-success my-2" type="submit">Search</button>
        </form>
        {
          this.state.showStats ?
            <PlayerStats
              nickName={this.state.Stats.username}
              uid={this.state.uid}
              close={this.closeStats}
              isLoading={this.state.isLoading}
              matchesplayed={this.state.Stats.matchesplayed}
              kills={this.state.Stats.kills}
              kd={this.state.Stats.kd}
              wins={this.state.Stats.wins}
              winrate={this.state.Stats.winrate}
            />
            :
            null

        }

      </React.Fragment>
    );
  }

}



export default SearchPlayer;