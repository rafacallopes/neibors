import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import {Header, Footer, Title, Button, Icon} from 'native-base';

const { width, height } = Dimensions.get('window')

class Login extends Component {

  forgetPassword = () => {
    console.log('show modal')
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  // renderButton() {
  //   if (this.props.loading) {
  //     return <Spinner size="large" />;
  //   }

  //   return (
  //     <Button onPress={this.onButtonPress.bind(this)}>
  //       Login
  //     </Button>
  //   );
  // }
  render() {
    return (
      <ImageBackground source={require('../Assets/background.png')} 
      style={styles.backgroundImage}>
      <View style={styles.inner}>

          <View style ={{alignSelf: 'center', paddingTop: width * 0.15, flexDirection: 'column', alignItems: 'center'}}>
              <View style={{alignSelf: 'center'}}>
                <Image source={require('../Assets/snowbig.png')} 
                style={styles.logo}/>   
                </View>
              <View style={{paddingTop: 10, alignSelf:'center'  }}>
                <Text style={{fontSize: 40, color: '#103e59'}}>NEYBORS</Text>
              </View>
          </View>

                <View style={{paddingTop: width * 0.14}}></View>

             <View style={[styles.inputContainer, {alignSelf:'center'}]}>
                  <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    label="Email"
                    placeholder="Email"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                  />
                  </View>

                <View style={{paddingVertical: width * 0.031}}></View>
              
                <View style={[styles.inputContainer, {alignSelf:'center'}]}>
                  <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    label="Password"
                    placeholder="password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                  />
                  </View>
              

              <Text style={styles.errorTextStyle}>
                {this.props.error}
              </Text>

                <View style={{alignSelf:'center'}}>
                  <Button style={styles.Button} onPress={() => this.onButtonPress()}>
                    <View style={{paddingHorizontal: width * 0.28}}>
                    <Text style={{fontSize: 18, color: 'white',}}>Sign In</Text>
                  </View>
                  </Button>
                </View>
                
                <View style={{paddingTop: width * 0.03, alignSelf: 'center'}}>
                  <TouchableOpacity onPress={() => this.forgetPassword()}>
                  <Text style={{ textDecorationLine: 'underline', fontSize: 15, color: '#3c3f44'}}>Forgot password?</Text>
                  </TouchableOpacity>
                </View>

                {/* <View style={{flexDirection: 'row', paddingTop: width * 0.1}}>
                <TouchableOpacity>
              
                <Icon name='facebook' style={{fontSize: 20}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image/>
                </TouchableOpacity>
                </View> */}
                    <View style={{flexDirection: 'row', paddingTop: height * 0.37, alignSelf: 'center'}}>
                      <Text style={{fontSize: 20, color: '#103e59' }}>Don't have an account?</Text>
                      <Button style={{  width: width * 0.35, borderRadius: 30,height: height * 0.035,  borderColor: '#103e59',borderWidth: 2,backgroundColor: '#103e59'}}>
                        <View style={{paddingHorizontal: width * 0.1}}>
                        <Text style={{fontSize: 14, color: 'white',}}>Sign Up</Text>
                        </View>
                      </Button>
                    </View>
                  
                  
           
      </View>
      </ImageBackground>

     

          /* <Container>

          <View style={{flexDirection: 'column', alignSelf: 'center', paddingTop: width * 0.5}}>

          <View style={{alignSelf: 'center'}}>
          <Image
          style={{width: 230, height: 58}}
          source={{uri: 'https://scontent.fsdu8-1.fna.fbcdn.net/v/t1.0-9/42128095_1812280528840713_2849025835216666624_n.jpg?_nc_cat=0&oh=6d8f3c3119a68d51191e2cecebb7658d&oe=5C2BEECF'}}
        />
        </View>

            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.inputText}
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
            />
            </View>

            <View style={{paddingVertical: width * 0.02}}></View>
        
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
            </View>
        

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

          
          <Button style={styles.Button} onPress={() => this.onButtonPress()}>
          <View style={{paddingHorizontal: width * 0.28}}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Login</Text>
          </View>
          </Button>

          <View style={{flexDirection: 'row', alignSelf: 'center', paddingTop: width * 0.03}}>
          <Text style={{fontSize: 18, color: '#709fea'}}> or</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 18, color: '#709fea', fontWeight: 'bold'}}> Sign Up</Text>
            </TouchableOpacity>
          </View>

          </View>
          </Container> */

        
        

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  TextInput: {
   
    fontSize: 18,
    marginLeft: 32,
    width: '1%'
  },
  inputContainer: {
    width: width * 0.75,
    backgroundColor: '#fff',
    height: height * 0.073,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
  },
  Button: {
    width: width * 0.75,
    borderRadius: 30,
    height: height * 0.073,
    borderColor: '#103e59',
    borderWidth: 2,
    backgroundColor: '#103e59',
  },

  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, .5)'

  },
  logo: {
    width: 50,
    height: 50,
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(Login);