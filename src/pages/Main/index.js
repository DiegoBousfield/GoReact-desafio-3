import React, { Fragment } from 'react';

import Map from '../../Components/Map';
import Modal from '../../Components/Modal';
import SideList from '../../Components/SideList';

const Main = () => (
  <Fragment>
    <Map />
    <SideList />
    <Modal />
  </Fragment>
);

export default Main;
