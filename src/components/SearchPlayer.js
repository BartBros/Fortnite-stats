import React from 'react';

const SearchPlayer = () => (
  <React.Fragment>
    <input className="form-control mr-sm-2" type="search" placeholder="Player Nickname here.." aria-label="Search"></input>
    <button className="btn btn-outline-success my-2" type="submit">Search</button>
  </React.Fragment>

);


export default SearchPlayer;