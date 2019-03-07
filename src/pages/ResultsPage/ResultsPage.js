'use-strict';

import React from 'react';
import { connect } from 'react-redux';

import Map from './Map';
import WeatherPoints from './WeatherPoints';

const ResultsPage = ({origin, destination, directions, waypoints}) => {
  if (waypoints) {
    return (
      <div id='results'>
        <h1>Heres the weather for the trip</h1>
        <p>Starting in {origin} and finishing in {destination}</p>
            <Map waypoints={waypoints}/>
            <WeatherPoints
              waypoints={waypoints}
              directions={directions}
            />
      </div>
    );
  } else {
    return <p>Waiting...</p>
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
