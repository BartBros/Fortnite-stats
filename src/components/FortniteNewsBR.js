import React from 'react';

class FortniteNewsBR extends React.Component {

  state = {
  }


  componentDidMount() {
    this.fetchNews();
    if (this.state.news) {
    }
  }

  fetchNews = () => {
    const settings = {
      "headers": {
        "Authorization": "34d68b148e30d7f7a4e608d9baba7b92"
      },
    };
    const url = `https://fortnite-api.theapinetwork.com/br_motd/get
        `;
    fetch(url, settings)
      .then(response => response.json())
      .then(data => this.setState({
        news: data.data
      }))
  }

  logNews = () => {
    console.log(this.state.news);
  }

  render() {
    return (
      <React.Fragment>

        <h1>{this.state.text}</h1>
        <div className="container">
          <div className="row justify-content-center">
            {
              this.state.news ?
                this.state.news.map((item, index) => {
                  return <div className="col-12 fortniteNews" key={index}>
                    <div className="card p-2">
                      <img className="card-img-top" src={item.image} alt={item.title}></img>
                      <div className="card-body">
                        <h3>{item.title}</h3>
                        <p className="card-text">{item.body}</p>
                      </div>
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

export default FortniteNewsBR;