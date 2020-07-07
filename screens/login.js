import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Input, Image} from 'react-native-elements';
import {Icon, Button} from 'native-base';
import GetLocation from 'react-native-get-location';
class Login extends Component {
  test() {
    console.log('focus');
  }
  // customComponent() {
  //   console.log('inside function');
  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 15000,
  //   })
  //     .then(location => {
  //       console.log(location);
  //     })
  //     .catch(error => {
  //       const {code, message} = error;
  //       console.warn(code, message);
  //     });

  //   try {
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         email: this.state.email,
  //         password: this.state.password,
  //       }),
  //     };
  //     console.log(requestOptions);
  //     fetch('http://192.168.1.102:3000/login', requestOptions).then(result => {
  //       result.json().then(data => {
  //         console.log(data.valid);
  //       });
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  constructor() {
    super();
    this.state = {
      email: undefined,
      password: undefined,
      iconName: 'eye-slash',
      flag: true,
    };
  }
  showPass() {
    if (this.state.iconName === 'eye-slash') {
      this.setState({iconName: 'eye'});
      this.setState({flag: false});
    } else {
      this.setState({iconName: 'eye-slash'});
      this.setState({flag: true});
    }
  }
  render() {
    return (
      <View>
        <Image
          style={{height: 80, marginTop: 15}}
          source={require('../assest/digiowner-logo.png')}
        />
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 5,
          }}>
          <View style={{marginTop: 55}} />
          <Input
            value={'India (+91)'}
            editable={false}
            selectTextOnFocus={false}
          />
          <Input
            rightIcon={
              <Icon
                style={{
                  color: 'green',
                }}
                type="FontAwesome"
                name="mobile"
              />
            }
            onFocus={() => this.test()}
            placeholder="Enter Your Mobile Number"
            keyboardType="number-pad"
            onChangeText={value => this.setState({email: value})}
          />
          {/* <Input
            rightIcon={
              <Icon
                style={{color: 'green'}}
                type="FontAwesome"
                name={this.state.iconName}
                onPress={() => this.showPass()}
              />
            }
            placeholder="Password"
            onChangeText={value => this.setState({password: value})}
            secureTextEntry={this.state.flag}
          /> */}
          {/* <Button
            style={{justifyContent: 'center', }}
            onPress={() =>
              this.props.navigation.navigate('otp', {
                mobileNo: this.state.email,
              })
            }>
           
          </Button> */}
          <View
            style={{
              justifyContent: 'center',
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              onPress={() =>
                this.props.navigation.navigate('otp', {
                  mobileNo: this.state.email,
                })
              }
              type="FontAwesome"
              name="chevron-circle-right"
              style={{
                fontSize: 55,
                color: 'green',
                padding: 15,
                marginTop: 25,
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
