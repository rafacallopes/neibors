import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button} from 'native-base';
import { emailChanged, passwordChanged, usernameChanged, loginUser } from '../actions';

const { width, height } = Dimensions.get('window')

class Signup extends Component {

    onUsernameChange(text) { 
        this.props.usernameChanged(text);
      }

    onEmailChange(text) {
        this.props.emailChanged(text);
      }
    
    onPasswordChange(text) {
        this.props.passwordChanged(text);
      }

    onButtonPress = () => {
        console.log('account will be created');
        Actions.pop();
    }


render = () => {
    return (
        <ImageBackground source={require('../Assets/login/background.png')} 
            style={styles.backgroundImage}>
        <View style={styles.inner}>
        
        <View style ={{alignSelf: 'center', paddingTop: width * 0.15, flexDirection: 'column', alignItems: 'center'}}>
            <View style={{alignSelf: 'center'}}>
                <Image source={require('../Assets/snowbig.png')} 
                style={styles.logo}/>   
            </View>

            <View style={{paddingTop: 10, alignSelf:'center'}}>
                  <Text style={{fontSize: 40, color: '#103e59'}}>NEYBORS</Text>
            </View>

            <View style={{paddingTop: height * 0.025}}></View>

            <View style={{flexDirection: 'column'}}>
              <TouchableOpacity>
                <Image source={require('../Assets/login/Signup/addpic.png')} 
                        style={styles.pic}/>
                <View style={{paddingTop: width * 0.02, paddingLeft: width * 0.012}}><Text style={{FontSize: 15, color: 'black'}}>Add photo</Text></View> 
              </TouchableOpacity>
            </View>

            <View style={{paddingTop: height * 0.025}}></View>

            <View style={[styles.inputContainer, {alignSelf:'center'}]}>
              <View>
                <Image source={require('../Assets/login/Login/username.png')} 
                style={styles.noStyle}/>
              </View>
                <View style={{paddingHorizontal:8}}>
                  <TextInput
                    style={styles.inputText}
                    label="Username"
                    placeholder="Username"
                    onChangeText={this.onUsernameChange.bind(this)}
                    value={this.props.username}
                  />
                </View>
            </View>

            <View style={{paddingTop: height * 0.025}}></View>
              
            <View style={[styles.inputContainer, {alignSelf:'center'}]}>
              <View>
                <Image source={require('../Assets/login/Login/password.png')} 
                style={styles.noStyle}/>
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


            <View style={{paddingTop: height * 0.025}}></View>


             <View style={[styles.inputContainer, {alignSelf:'center'}]}>
             <View>
                <Image source={require('../Assets/login/Login/password.png')} 
                style={styles.noStyle}/>
              </View>
              <View style={{paddingHorizontal:8}}>

                  <TextInput
                    style={styles.inputText}
                    label="Password"
                    placeholder="password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                  />
              </View>

            </View>

            <View style={{paddingTop: height * 0.025}}></View>

             <View style={[styles.inputContainer, {alignSelf:'center'}]}>
             <View>
                <Image source={require('../Assets/login/Login/email.png')} 
                style={styles.noStyle}/>
              </View>
             <View style={{paddingHorizontal:8}}>

                  <TextInput
                    style={styles.inputText}
                    
                    label="email"
                    placeholder="E-mail"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                  />
              </View>
            </View>


            <View style={{paddingTop: height * 0.025}}></View>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => console.log('opens facebook page')}>
                    <Image source={require('../Assets/login/Login/facebook.png')} 
                            style={styles.facebook}/>
              </TouchableOpacity>

              <View style={{paddingHorizontal: width * 0.025}}></View>

                <TouchableOpacity onPress={() => console.log('clicked')}>
                    <Image source={require('../Assets/login/Login/user.png')} 
                            style={styles.user}/>
              </TouchableOpacity>
            </View>

            <View style={{paddingTop: height * 0.025}}></View>


          <View style={{alignSelf:'center'}}>
                  <Button style={styles.Button} onPress={() => this.onButtonPress()}>
                      <View style={{paddingHorizontal: width * 0.28}}>
                      <Text style={{fontSize: 18, color: 'white',}}>Sign Up</Text>
                      </View>
                  </Button>
           </View>

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
    },
    pic: {
      width: 80,
      height: 80,
    },
    facebook: {
      width: 70,
      height: 70,
    },
    user: {
      width: 60,
      height: 60,
    },
    formIcons: {
      width: 30,
      height: 30,
    },

  };


const mapStateToProps = ({ auth }) => {
    const { email, password, username, error, loading } = auth;
  
    return { email, password, username, error, loading };
  };


export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser, usernameChanged
  })(Signup);