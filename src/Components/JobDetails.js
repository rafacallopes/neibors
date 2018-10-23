import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, Image, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, Header, Container, Body } from 'native-base';
import { searchChanged } from '../actions';

const { width, height } = Dimensions.get('window')

class JobDetails extends Component {
   
    onSearchChange(text) {
        this.props.searchChanged(text);
      }

    onRequestPress = () => {
        Actions.request2()
      }


render = () => {
    return (
    <Container>
        <ImageBackground source={require('../Assets/Find/map2.png')} 
            style={styles.backgroundImage}>
        <View style={styles.inner}>
    <Header style ={{backgroundColor: '#103e59', height: height * 0.19}}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row',paddingTop: height * 0.03}}>

                <View style={{paddingHorizontal: width * 0.3,}}>
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
                        <Image source={require('../Assets/Find/1/menu.png')} 
                            style={styles.menu}/> 
                    </TouchableOpacity>   
                </View>
             </View>
     
            

            
                <View style={{alignSelf: 'center'}}>
                    <Image source={require('../Assets/Request/ConfirmLocation3/progressBar1.png')} 
                        style={styles.progressBar}/>
                </View>
        </View>
            
    </Header>
    
    <Body>
        <View style={{paddingTop: height * 0.02}}></View>
        <View style={[styles.inputContainer, {alignSelf:'center'}]}>
            <Image source={require('../Assets/Find/2/location.png')} 
                style={styles.formIcons}/>
        </View>
             <View style={{paddingHorizontal:8}}>
                  <TextInput
                    style={styles.inputText}
                    label="Search"
                    onChangeText={this.onSearchChange.bind(this)}
                    value={this.props.search}
                  />
        </View>
        
      
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: height * 0.37, flexDirection: 'column'}}>
          
            <View style={styles.info}>
            <Text style={{fontSize: 15, color: 'white', paddingLeft: width * 0.024, paddingTop: height * 0.025 }}>Shoverels are currently available in your area</Text>
            </View>

            <View style={{paddingVertical: height * 0.015}}></View>

            <View style={{alignSelf:'center'}}>
                <Button style={styles.Continue} onPress={() => this.onRequestPress()}>
                    <View style={{paddingHorizontal: width * 0.29, }}>
                        <Text style={{fontSize: 20, color: 'white', }}>Continue</Text>
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
      width: width * 0.88,
      backgroundColor: '#fff',
      height: height * 0.073,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 30,
      shadowOffset:{  width: 2,  height: 4,  },
      shadowColor: '#3c3f44',
      shadowOpacity: 1.0,
    },
 
    Continue: {
        width: width * 0.80,
        borderRadius: 30,
        height: height * 0.08,
        borderColor: '#103e59',
        borderWidth: 2,
        backgroundColor: '#103e59',
        shadowOffset:{  width: 2,  height: 4,  },
        shadowColor: '#3c3f44',
        shadowOpacity: 1.0,
      },
      
      info: {
        width: width * 0.80,
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
      },
      progressBar: {
        resizeMode: 'stretch',
        width: width * 0.86,
        height: height * 0.05,
      },
  };
  


  const mapStateToProps = ({ job }) => {
    const { search } = job;
  
    return { search };
  };
  
  export default connect(mapStateToProps, {
    searchChanged
  })(JobDetails);

//   #a8b3c4