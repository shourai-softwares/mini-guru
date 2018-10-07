import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import Canvas, { Image } from 'react-native-canvas';
import ImagePicker from 'react-native-image-picker';
import { Button } from 'react-native-material-ui';
import { uiTheme } from '../constants';

class CameraScreen extends PureComponent {
  static navigationOptions = {
    title: 'Diagnóstico',
    ...uiTheme.header,
  };

  state = {};

  handleCanvas = (canvas) => {
    const image = new Image(canvas);
    const source = this.state.source;
    image.addEventListener('load', () => {
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      context.getImageData(0, 0, canvas.width, canvas.height).then(data => console.log('data', data));
    });
    image.src = `data:${source.type};base64,${source.data}`;
  };

  takePicture = async () => {
    ImagePicker.showImagePicker({
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({ source: response });
      }
    });
  };

  render() {
    if (this.state.source) {
      return (
        <View>
          <Canvas ref={this.handleCanvas} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Agora, preciso que tire uma foto da sua língua:</Text>
        <Button
          primary raised
          text="Foto"
          onPress={this.takePicture}
        />
      </View>
    );
  }
}

export default CameraScreen;
