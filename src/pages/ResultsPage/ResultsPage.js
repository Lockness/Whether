'use-strict';

import React from 'react';
import { connect } from 'react-redux';

import Map from './Map';
import WeatherPoints from './WeatherPoints';
import Spinner from '../../components/Spinner/';

const ResultsPage = ({origin, destination, directions, waypoints}) => {
  if (waypoints) {
    return (
      <div id='results' className='text-center'>
        <div className='mt-2 mb-4 p-4'>
          <h1 className='mb-2'>Heres the weather for the trip</h1>
          <p>Starting in {origin} and finishing in {destination}</p>
        </div>
        <Map waypoints={waypoints} />
        <WeatherPoints
          waypoints={waypoints}
          directions={directions}
        />
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <p className="align-middle text-center text-3xl mt-32">
          Loading your trip <span role="img" aria-label="smile">😁</span>
        </p>
        <Spinner />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, props) => 
({
  origin: state.origin,
  destination: state.destination,
  directions: state.directions,
  waypoints: state.waypoints
})

export default connect(mapStateToProps)(ResultsPage);
