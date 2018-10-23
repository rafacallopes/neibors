import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, Header, Container, Body } from 'native-base';
import { emailChanged, passwordChanged, usernameChanged, loginUser } from '../actions';

const { width, height } = Dimensions.get('window')

class Home extends Component {


    onRequestPress = () => {
        console.log('Request')
      }


render = () => {
    return (
    <Container>
        <ImageBackground source={require('../Assets/Find/map2.png')} 
            style={styles.backgroundImage}>
        <View style={styles.inner}>
    <Header style ={{backgroundColor: '#103e59', height: height * 0.12}}>
     <View style={{flexDirection: 'row',paddingTop: height * 0.03}}>

            <View style={{paddingHorizontal: width * 0.3}}>
                <TouchableOpacity onPress={() => Actions.pop()}>
                    <Image source={require('../Assets/Find/2/back-ios.png')} 
                        style={styles.menu}/> 
                </TouchableOpacity>
            </View>
           
            <View>
                <Image source={require('../Assets/Find/1/snow52.png')} 
                        style={styles.logo}/> 
            </View>

            <View style={{paddingHorizontal: width * 0.3}}>
                <TouchableOpacity>
                    <Image source={require('../Assets/Find/1/settings.png')} 
                        style={styles.menu}/> 
                </TouchableOpacity>   
            </View>
     </View>
    </Header>
    
    <Body>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: height * 0.73}}>
          
            
            <View style={{alignSelf:'center'}}>
                <Button style={styles.Request} onPress={() => this.onRequestPress()}>
                    <View style={{paddingHorizontal: width * 0.18, }}>
                        <Text style={{fontSize: 20, color: 'white', }}>REQUEST A JOB</Text>
                    </View>
                </Button>
            </View>
        </View>
    </Body>
    
    </View>
    </ImageBackground>
    </Container>
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
    FindJob: {
      width: width * 0.75,
      borderRadius: 30,
      height: height * 0.08,
      borderColor: '#103e59',
      borderWidth: 2,
      backgroundColor: '#103e59',
      shadowOffset:{  width: 2,  height: 4,  },
      shadowColor: '#3c3f44',
      shadowOpacity: 1.0,
    },

    Request: {
        width: width * 0.75,
        borderRadius: 30,
        height: height * 0.08,
        borderColor: '#436625',
        borderWidth: 2,
        backgroundColor: '#436625',
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
      backgroundColor: 'rgba(255, 255, 255, .3)'
  
    },
    logo: {
      width: 45,
      height: 45,
    },
    menu: {
        width: 30,
        height: 30,
      },
    settings: {
        width: 35,
        height: 35,
      }
  };


export default Home;