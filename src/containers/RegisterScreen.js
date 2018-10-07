import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-material-ui';
import PropTypes from 'prop-types';
import { uiTheme } from '../constants';

class RegisterScreen extends PureComponent {
  static navigationOptions = {
    title: 'Cadastrar',
    ...uiTheme.header,
  };

  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Primeiro, algumas perguntas:</Text>
        <View>
          <Text>Qual é o seu nome?</Text>
          <TextInput placeholder="Nome" />
        </View>
        <Button
          primary raised
          text="Confirmar"
          onPress={() => this.props.navigation.navigate('Camera')}
        />
      </View>
    );
  }
}

export default RegisterScreen;
