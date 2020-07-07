import React, {Component} from 'react';
import {View, Text} from 'native-base';
import {Button, Image} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {Avatar} from 'react-native-elements';

class MyPage extends Component {
  async componentDidMount() {
    const userInfo = await GoogleSignin.getCurrentUser();
    console.log(userInfo.user);
    this.setState({userInfo});
    this.setState({img: userInfo.user.photo});
  }
  constructor(props) {
    super(props);
    this.state = {
      img: '',
    };
  }
  getCurrentUserInfo = async () => {
    try {
      // const userInfo = await GoogleSignin.getCurrentUser();
      // console.log(userInfo.user);
      // this.setState({userInfo});
      // this.setState({img: userInfo.photo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('not');
      } else {
        // some other error
      }
    }
  };
  render() {
    return (
      <View
        style={{alignContent: 'center', alignItems: 'center', marginTop: 150}}>
        <Avatar
          source={{
            uri: this.state.img,
          }}
          showEditButton
          rounded
          size={100}
        />
        <Text>Name</Text>
      </View>
    );
  }
}

export default MyPage;
