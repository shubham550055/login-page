import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Button from 'react-native-button';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const {username, password} = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.maincontainer}>
          <View>
            <ImageBackground
              source={require('../src/img/3.png')}
              style={{height: 300}}
              resizeMode="cover">
              <View style={styles.backgroundContainer}>
                <Image
                  style={styles.logo}
                  source={require('../src/img/2.png')}
                />
              </View>
              <Text style={styles.toptext}>Login</Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingLeft: 25,
                  paddingTop: 10,
                  color: '#a5a5a5',
                }}>
                Welcome Back...!!!
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.container}>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({username})}
              placeholder={'Enter Email'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />
            <TouchableOpacity>
              <Text style={styles.text}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Button
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('Add Post')}>
                  Login
                </Button>
              </View>
            </TouchableOpacity>
            <View style={styles.lineStyle}></View>
            <View style={styles.btncontainer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.FacebookStyle}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate('Add Post')}>
                  <Image
                    source={{
                      uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
                    }}
                    style={styles.ImageIconStyle}
                  />
                  <Text style={styles.TextStyle}> Facebook </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.GooglePlusStyle}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate('Add Post')}>
                  <Image
                    source={{
                      uri:
                        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
                    }}
                    style={styles.ImageIconStyleF}
                  />
                  <Text style={styles.TextStyle}> Gmail </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.btmtext}>
                Don't Have an Account? <Text style={styles.text}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backgroundContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    alignItems: 'center',
    height: 50,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f6503f',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  toptext: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 25,
    paddingTop: 100,
  },
  text: {
    textAlign: 'right',
    fontSize: 20,
    color: '#f3533e',
    paddingBottom: 15,
  },
  btmtext: {
    textAlign: 'center',
    fontSize: 17,
    paddingTop: 15,
    marginBottom: 40,
    paddingTop: 30,
  },
  btncontainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 5,
  },
  input: {
    alignItems: 'center',
    height: 50,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
    borderColor: '#ccc',
    marginBottom: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 7,
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 75,
    width: 240,
    height: 52,
  },
  GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d73a29',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 50,
    borderRadius: 5,
    margin: 5,
  },

  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4167b2',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 50,
    borderRadius: 5,
    margin: 5,
  },

  ImageIconStyle: {
    padding: 10,
    marginLeft: 10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  ImageIconStyleF: {
    padding: 10,
    marginLeft: 15,
    marginRight: 3,
    height: 26,
    width: 26,
    resizeMode: 'stretch',
  },

  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
