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
      .then(this.createStore)


  }

  createStore = () => {
    const featured = this.state.news.filter((item) => item.store.isFeatured)
    const daily = this.state.news.filter((item) => !item.store.isFeatured)
    this.setState({
      featured: featured,
      daily: daily
    })


  }

  logNews = () => {
    console.log(this.state.news);
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.logNews}>Test</button>
        <div className="container">
          <div className="row">

              <h3 className="col-12">Featured</h3>

            {
              this.state.featured ?
                this.state.featured.map((item, index) => {
                  return <div className="col-md-6 fortniteStore" key={index}>
                    <div className="card">
                      <img className="card-img-top" src={item.item.images.information} alt={item.title}></img>
                    </div>
                  </div>
                })
                :
                <h3>Wait</h3>
            }
            <div className="col-12">
              <h3>Daily</h3>
            </div>
            {
              this.state.daily ?
              this.state.daily.map((item, index) => {
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