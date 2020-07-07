import React, {Component} from 'react';
import {View, Text} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import {Button, Image} from 'react-native';
class Setting extends Component {
  options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  upload() {
    ImagePicker.showImagePicker(this.options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        // console.log(source);

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: '',
    };
  }
  render() {
    return (
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <Button
          title="upload"
          onPress={() => {
            this.upload();
          }}
        />
        <Image
          source={this.state.avatarSource}
          style={{width: 100, height: 100}}
        />
      </View>
    );
  }
}

export default Setting;
