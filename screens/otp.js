import React, {Component} from 'react';
import {View, Text, Root, Icon} from 'native-base';
import {
  TextInput,
  StyleSheet,
  Modal,
  ActivityIndicator,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
// import {} from 'react-native-gesture-handler';
// import {TextInput} from 'react-native-gesture-handler';
class OTP extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.refs.pin1ref.focus();
    });
    GoogleSignin.configure({
      webClientId:
        '791810377067-ksqkmac1jgd3u72remo68r6tgree6an8.apps.googleusercontent.com', // client ID of type WEB for your server(needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
    });
    // this.interval = setInterval(
    //   () => this.setState(prevState => ({timer: prevState.timer - 1})),
    //   1000,
    // );
    // const no = this.props.navigation.getParam('mobileNo');
  }
  componentDidUpdate() {
    // if (this.state.timer === 1) {
    //   clearInterval(this.interval);
    // }
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }
  setModalVisible(visible, pin4) {
    this.setState({modalVisible: visible});

    const number =
      '' + this.state.pin1 + this.state.pin2 + this.state.pin3 + pin4;
    const fin = parseInt(number);
    console.log(fin);
    if (fin === 1234) {
      setTimeout(() => {
        this.setState({modalVisible: false});
      }, 1000);

      this.props.navigation.navigate('home');
    }
  }
  constructor(props) {
    console.log('cons');

    super(props);

    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      mobileNo: this.props.route.params.mobileNo,
      timer: 3,
      modalVisible: false,
    };
  }
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();
      console.warn({userInfo: info});
      this.callfun(info);
      setUserInfo(info);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  callfun(info) {
    console.log(info);
    this.props.navigation.navigate('home');
  }
  render() {
    const {pin1, pin2, pin3, pin4} = this.state;

    return (
      <Root>
        <Modal visible={this.state.modalVisible}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#b19cd9',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 5,
                width: '80%',
                alignItems: 'center',
              }}>
              <Text style={styles.progressHeader}>Loading...</Text>
              <ActivityIndicator size="large" color="#f35588" />
            </View>
          </View>
        </Modal>
        <Text style={styles.text}>Verification Code </Text>
        <Text style={styles.subtext}>
          Please type verification code {'\n'} sent to {this.state.mobileNo}
        </Text>

        <View style={styles.container}>
          <TextInput
            keyboardType="number-pad"
            maxLength={1}
            ref={'pin1ref'}
            style={styles.inputBox}
            onChangeText={pin1 => {
              this.setState({pin1: pin1});
              if (pin1 != '') {
                this.refs.pin2.focus();
              }
            }}
            value={pin1}
          />
          <TextInput
            keyboardType="number-pad"
            maxLength={1}
            ref={'pin2'}
            style={styles.inputBox}
            onChangeText={pin2 => {
              this.setState({pin2: pin2});
              if (pin2 != '') {
                this.refs.pin3.focus();
              }
            }}
            value={pin2}
          />

          <TextInput
            keyboardType="number-pad"
            maxLength={1}
            ref={'pin3'}
            style={styles.inputBox}
            onChangeText={pin3 => {
              this.setState({pin3: pin3});
              if (pin3 != '') {
                this.refs.pin4.focus();
              }
            }}
            value={pin3}
          />
          <TextInput
            keyboardType="number-pad"
            maxLength={1}
            ref={'pin4'}
            style={styles.inputBox}
            onChangeText={pin4 => {
              console.log(pin4);
              this.setState({pin4: pin4});
              if (pin4 != '') {
                this.setModalVisible(true, pin4);
              }
            }}
            value={pin4}
          />
        </View>

        {/* <Text> {this.state.timer} </Text> */}
        <Text style={styles.wrong}>Enter a wrong number ?</Text>
        <Text style={styles.wrong}>OR</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Text style={styles.google}>Signup With</Text>
          <Image
            source={require('../assest/google.png')}
            style={{height: 30, width: 30}}
          /> */}
          {/* <Button title="ok" /> */}
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => this.signIn()}
          />
        </View>
      </Root>
    );
  }
}
const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#f5f4f2',
    fontWeight: '600',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    height: 55,
    width: '10%',
    borderWidth: 0.5,
    borderColor: 'grey',
    textAlign: 'center',
    borderRadius: 11,
  },
  container: {
    flex: 0.6,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  subtext: {
    padding: 10,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  wrong: {
    padding: 10,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  google: {
    padding: 10,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',

    fontSize: 16,
  },
});
export default OTP;
