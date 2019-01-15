import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import PropTypes from 'prop-types';

// import 'mapbox-gl/dist/mapbox-gl.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as modalActions } from '../../store/ducks/modal';

import './styles.css';

class Map extends Component {
  static propTypes = {
    users: PropTypes.shape({
      data: PropTypes.array,
    }).isRequired,
    openModal: PropTypes.func.isRequired,
  };

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
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = async (e) => {
    const [longitude, latitude] = e.lngLat;
    const { openModal } = this.props;

    await openModal({ latitude, longitude });
  };

  render() {
    const { users } = this.props;
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ29ib3VzZmllbGQiLCJhIjoiY2pxamhqOW9wMndrMjQzbGJ6ZmJ1Z2lxbyJ9.aPfYQXaMwTolX9OzhWQ_Qw"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {users.data.map(user => (
          <Marker
            latitude={user.coordinates.latitude}
            longitude={user.coordinates.longitude}
            key={user.id}
          >
            <img className="avatar" alt={`${user.name} profile avartar`} src={user.avatar} />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
