import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import { uiTheme } from '../constants';

class HomeScreen extends PureComponent {
  static navigationOptions = {
    title: 'Mini Guru',
    ...uiTheme.header,
  };

  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Olá, vamos começar o seu cadastro?</Text>
        <Button
          primary raised
          text="Cadastrar"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
  }
}

export default HomeScreen;
