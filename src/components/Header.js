import React from 'react';
import SearchPlayer from './SearchPlayer';

// Full version with { return () }
const Header = () => {
  return (
    <header>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4">Your Fortnite Stats</h1>
          <SearchPlayer />
        </div>
      </div>
    </header>
  );
}

export default Header;