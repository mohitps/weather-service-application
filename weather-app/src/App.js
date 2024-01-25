// React imports
import './App.css';
import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Image imports
import logo from './images/logo-weather-200.png'
import stormCloud from './images/storm-cloud-picture.jpg'

function App() {

  return (
    // split the main page into left and right halves
    <div className="split-page" style={{ backgroundColor: '#343d46' }}>
      <div className="left-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={stormCloud} alt="storm-cloud" style={{ display: 'block', height: '90%', width: '100%', borderRadius: '15px'}} />
      </div>

      <div className="right-container" style={{ textAlign: 'center' }}>

        {/* Add Logo to right container */}
        <img src={logo} alt="website-logo" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '20%', width: '30%' }} />
        <h1 className='weather-app-name'>ClimaFit</h1>

        {/* Search Bar */}
        <div class="md-form mt-0" style={{ width: "50%", margin: 'auto'}}>
          <input class="form-control" type="text" placeholder="Search ZIP Code" aria-label="Search" />
        </div>

      </div>
    </div>

  );
}

export default App;
