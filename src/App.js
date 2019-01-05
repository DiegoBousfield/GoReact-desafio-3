import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

export default class App extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick(e) {
    const [latitude, longitude] = e.lngLat;

    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ29ib3VzZmllbGQiLCJhIjoiY2pxamhqOW9wMndrMjQzbGJ6ZmJ1Z2lxbyJ9.aPfYQXaMwTolX9OzhWQ_Qw"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={-23.5439948}
          longitude={-46.6065452}
          onClick={this.handleMapClick}
          captureClick
        >
          <img
            alt=""
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
          />
        </Marker>
      </MapGL>
    );
  }
}
