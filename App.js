import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Canvas, { Image } from 'react-native-canvas';
import ImagePicker from 'react-native-image-picker';

export default class App extends Component {
  state = {};

  handleCanvas = (canvas) => {
    const image = new Image(canvas);
    const source = this.state.source;
    image.addEventListener('load', () => {
      console.log('image is loaded, drawing');
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      context.getImageData(0, 0, canvas.width, canvas.height).then(data => console.log('data', data));
    });
    image.src = `data:${source.type};base64,${source.data}`;
  };

  render() {
    if(this.state.source) {
      return (
        <View style={styles.container}>
          <Canvas ref={this.handleCanvas}/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {/*<RNCamera*/}
          {/*ref={ref => {*/}
            {/*this.camera = ref;*/}
          {/*}}*/}
          {/*style = {styles.preview}*/}
          {/*type={RNCamera.Constants.Type.back}*/}
          {/*flashMode={RNCamera.Constants.FlashMode.off}*/}
          {/*permissionDialogTitle={'Permission to use camera'}*/}
          {/*permissionDialogMessage={'We need your permission to use your camera phone'}*/}
          {/*onGoogleVisionBarcodesDetected={({ barcodes }) => {*/}
            {/*console.log(barcodes)*/}
          {/*}}*/}
        {/*/>*/}
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
          >
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    ImagePicker.showImagePicker({
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }, (response) => {
      console.log('response', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({ source: response });
      }

    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
