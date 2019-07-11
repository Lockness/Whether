import React from 'react';
import PropTypes from 'prop-types';

import Script from 'react-load-script';

const PlaceInput = React.forwardRef(({ id, label }, ref) => (
  <React.Fragment>
    <h2 className="text-lg text-left ml-2">{label}</h2>
    <input id={id} className="p-4 m-1 mb-3 text-indigo rounded-lg font-bold" ref={ref} />
  </React.Fragment>
));
PlaceInput.displayName = 'PlaceInput';
PlaceInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
};

class PlacesPicker extends React.Component {
  constructor(props) {
    super(props);

    this.destinationInputRef = React.createRef();
  }

  handleScriptLoad = () => {
    /* global google */
    const origin = document.getElementById('origin');
    const destination = document.getElementById('destination');
    this.originAutocomplete = new google.maps.places.Autocomplete(origin);
    this.destinationAutocomplete = new google.maps.places.Autocomplete(destination);

    this.originAutocomplete.addListener('place_changed', this.handleOriginSelect);
    this.destinationAutocomplete.addListener('place_changed', this.handleDestinationSelect);

    google.maps.event.addDomListener(origin, 'keydown', event => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
    google.maps.event.addDomListener(destination, 'keydown', event => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
  };

  handleOriginSelect = () => {
    const addressObject = this.originAutocomplete.getPlace();

    if (addressObject && addressObject.formatted_address) {
      this.props.setOrigin(addressObject.formatted_address);
    }
    this.destinationInputRef.current.focus();
  };

  handleDestinationSelect = () => {
    const addressObject = this.destinationAutocomplete.getPlace();

    if (addressObject && addressObject.formatted_address) {
      this.props.setDestination(addressObject.formatted_address);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBE4ui6NqI3DkVOY5iMZX6oUp1xoseJYA&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <div className="flex flex-col flex-initial justify-center xs:w-3/4 sm:w-1/2 lg:w-1/4 m-auto">
          <PlaceInput id="origin" label="Coming From:" />
          <PlaceInput label="Going To:" id="destination" ref={this.destinationInputRef} />
        </div>
      </React.Fragment>
    );
  }
}

PlacesPicker.propTypes = {
  setOrigin: PropTypes.func,
  setDestination: PropTypes.func
};

export default PlacesPicker;
