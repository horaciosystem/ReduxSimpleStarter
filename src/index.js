import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBnyfVihz2rttrJE2iuN-h_MtpH6_SntHA';

const App = () => {
  return (
    <div>
     <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
