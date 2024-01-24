// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import logo from './Images/logo-weather-200.png'

{/* Search Bar */}
{/* <div class="md-form mt-0">
<input class="form-control" type="text" placeholder="Search" aria-label="Search" />
</div> */}

function App() {

  return (
    // split the main page into left and right halves
    <div className="split-page" style={{backgroundColor: '#343d46' }}>
      <div className="left-container">

      </div>
      <div className="right-container" style={{alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        {/* Add Logo to right container */}
        <img src={logo} alt="website-logo" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '20%', width: '30%'}}/>
      </div>
    </div>

    // <div style={{ display: 'flex', height: '100vh', backgroundColor: '#343d46' }}>
    //   <div class="md-form mt-0">
    //     <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
    //   </div>
    // </div>
  );
}

export default App;
