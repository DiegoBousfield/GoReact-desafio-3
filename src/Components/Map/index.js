import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as modalActions } from '../../store/ducks/modal';

import { UserImage } from './styles';

class Map extends Component {
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

  handleMapClick = (e) => {
    const { openModal } = this.props;
    const [latitude, longitude] = e.lngLat;
    openModal();
  };

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
          <UserImage alt="" src="https://avatars2.githubusercontent.com/u/2254731?v=4" />
        </Marker>
      </MapGL>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Map);
