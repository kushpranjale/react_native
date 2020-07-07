import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Drawers from '../navigations/Drawer';
class Home extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Drawers />
      </NavigationContainer>
    );
  }
}

export default Home;
