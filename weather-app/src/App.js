// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { render } from '@testing-library/react';
// import ReactSearchBox from "react-search-box";


// This version of the code contains a very basic page that only has a search bar
// This is good enough for the first proper commit

function App() {

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div class="md-form mt-0">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </div>
  );
}

export default App;
