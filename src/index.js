import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// import Youtube from 'youtube-api-search';

const API_KEY = 'AIzaSyBH5gkJE688c7EpSLMZ-AxNbbxFxhfnse8';

// Create  new Component. This componente should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
