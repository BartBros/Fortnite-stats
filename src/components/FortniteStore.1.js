import React from 'react';

class FortniteStore extends React.Component {

  state = {
  }


  componentDidMount() {
    this.fetchStore();
  }

  fetchStore = () => {
    const settings = {
      "headers": {
        "Authorization": "34d68b148e30d7f7a4e608d9baba7b92"
      },
    };
    const url = `https://fortnite-api.theapinetwork.com/store/get`;
    fetch(url, settings)
      .then(response => response.json())
      .then(data => this.setState({
        news: data.data
      }))
  }

  createStore = () => {

  }

  logNews = () => {
    console.log(this.state.news);
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.logNews}>Test</button>
        <h1>{this.state.text}</h1>
        <div className="container">
          <div className="row justify-content-center">
            {
              this.state.news ?
                this.state.news.map((item, index) => {
                  return <div className="col-md-6 fortniteStore" key={index}>
                    <div className="card">
                      <img className="card-img-top" src={item.item.images.information} alt={item.title}></img>
                    </div>
                  </div>
                })
                :
                <h3>Wait</h3>
            }
          </div>
        </div>
      </React.Fragment>

    )
  }
}

export default FortniteStore;