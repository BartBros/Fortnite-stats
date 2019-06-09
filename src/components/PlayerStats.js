import React from 'react';

class PlayerStats extends React.Component {
  render() {

    return (
      <div className="player-stats">
      <a href="#" className="close-button" onClick={this.props.close}>✖</a>
        {
          this.props.isLoading ?
          <img src="http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_blue_350.gif" className="img-fluid" alt="Loading" />
          :
          <div className="container">
          <div className="row text-center">
            <div className="col-sm">
              Name: {this.props.nickName}
            </div>
          </div>
          <div className="row">
            <div className="col-sm bg-stats">
              <div className="main-stats">
                <span className="big">{this.props.wins}</span> Wins
              </div>
            </div>
            <div className="col-sm bg-stats">
              <div className="main-stats">
                <span className="big">{this.props.kills}</span> Kills
              </div>
            </div>
            <div className="col-sm bg-stats">
              <div className="main-stats main-stats-last">
                <span className="big">{this.props.matchesplayed}</span> Matches Played
              </div>
            </div>
          </div>

          <div className="row stats-small">
            <div className="col-sm text-left">
              K/D:
            </div>
            <div className="col-sm text-right">
              {this.props.kd}
            </div>
          </div>

          <div className="row stats-small">
            <div className="col-sm text-left">
              Win ratio:
            </div>
            <div className="col-sm text-right">
            {`${this.props.winrate}%`}
            </div>
          </div>

        </div>
        }

      </div>

    );
  }
}

export default PlayerStats;