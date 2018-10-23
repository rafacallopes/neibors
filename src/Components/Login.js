import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, emailChanged, passwordChanged, loginUser } from '../actions';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window')

class Login extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  onButtonPress = () => {
    Actions.home()
  }

  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  // onButtonPress = () => {
  //   const { email, password } = this.props;

  //   this.props.loginUser({ email, password });
  // }


  render() {
    return (
      <ImageBackground source={require('../Assets/login/background.png')} 
        style={styles.backgroundImage}>
        <View style={styles.inner}>

       <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          
        <ImageBackground source={require('../Assets/login/background.png')} 
            style={styles.backgroundImage}>
        <View style={styles.inner}>
            
          <View style={{paddingTop: width * 0.15}}></View>

          <View style={{alignSelf: 'center'}}>
                <Image source={require('../Assets/snowbig.png')} 
                style={styles.logo}/>   
          </View>

          <View style={{ paddingLeft: width * 0.14, paddingTop: height * 0.08}}>
                <Text style={{fontSize: 26, color: '#3c3f44' }}>Forgot Password?</Text>
          </View>
                   
          <View style={{paddingTop: width * 0.025}}></View>

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

         <View style={{paddingTop: width * 0.08}}></View>


        <View style={{alignSelf:'center'}}>
              <Button style={styles.Button} onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                  <View style={{paddingHorizontal: width * 0.3}}>
              <Text style={{fontSize: 18, color: 'white',}}>Send</Text>
                  </View>
              </Button>
        </View>

      </View>
      </ImageBackground>
        </Modal>

          <View style ={{alignSelf: 'center', paddingTop: width * 0.15, flexDirection: 'column', alignItems: 'center'}}>
            <View style={{alignSelf: 'center'}}>
                <Image source={require('../Assets/snowbig.png')} 
                style={styles.logo}/>   
            </View>

            <View style={{paddingTop: 10, alignSelf:'center'}}>
                  <Text style={{fontSize: 40, color: '#103e59'}}>NEYBORS</Text>
            </View>
          </View>

          <View style={{paddingTop: width * 0.14}}></View>

          <View style={[styles.inputContainer, {alignSelf:'center'}]}>
              <View>
                    <Image source={require('../Assets/login/Login/username.png')} 
                    style={styles.formIcons}/>
              </View>
              <View style={{paddingHorizontal:8}}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry
                        label="Username"
                        placeholder="Username"
                        onChangeText={this.onUsernameChange.bind(this)}
                        value={this.props.username}
               />

              </View> 
          </View>

          <View style={{paddingVertical: width * 0.031}}></View>
              
           <View style={[styles.inputContainer, {alignSelf:'center'}]}>
                 <View>
                    <Image source={require('../Assets/login/Login/password.png')} 
                    style={styles.formIcons}/>
              </View>
              <View style={{paddingHorizontal:8}}>
                  <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    label="Password"
                    placeholder="password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                  />
              </View>
          </View>
              

              {/* <Text style={styles.errorTextStyle}>
                {this.props.error}
              </Text> */}

           <View style={{paddingTop: height * 0.0125}}></View>

          <View style={{alignSelf:'center'}}>
                  <Button style={styles.Button} onPress={() => this.onButtonPress()}>
                      <View style={{paddingHorizontal: width * 0.28}}>
                      <Text style={{fontSize: 18, color: 'white',}}>Sign In</Text>
                      </View>
                  </Button>
           </View>
                
          <View style={{paddingTop: width * 0.03, alignSelf: 'center'}}>
                  <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                  <Text style={{ textDecorationLine: 'underline', fontSize: 15, color: '#3c3f44'}}>Forgot password?</Text>
                  </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', paddingTop: height * 0.37, alignSelf: 'center'}}>
              <Text style={{fontSize: 20, color: '#103e59' }}>Don't have an account?</Text>
              <Button onPress={() => Actions.sign()} style={{  width: width * 0.35, borderRadius: 30,height: height * 0.035,  borderColor: '#103e59',borderWidth: 2,backgroundColor: '#103e59'}}>
                <View style={{paddingHorizontal: width * 0.1}}>
                    <Text style={{fontSize: 14, color: 'white',}}>Sign Up</Text>
                </View>
              </Button>
          </View>
                  
                  
           
      </View>
      </ImageBackground>


        
        

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
    flex: 1,
    fontSize: 30,
    marginLeft: 32,
    paddingRight: 10
  },
  inputContainer: {
    width: width * 0.75,
    backgroundColor: '#fff',
    height: height * 0.070,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: width * 0.05,
    borderRadius: 30,
    shadowOffset:{  width: 2,  height: 4,  },
    shadowColor: '#3c3f44',
    shadowOpacity: 1.0,
  },
  Button: {
    width: width * 0.75,
    borderRadius: 30,
    height: height * 0.073,
    borderColor: '#103e59',
    borderWidth: 2,
    backgroundColor: '#103e59',
    shadowOffset:{  width: 2,  height: 4,  },
      shadowColor: '#3c3f44',
      shadowOpacity: 1.0,
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
  const { username, email, password, error, loading } = auth;

  return { username, email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, usernameChanged, passwordChanged, loginUser
})(Login);