import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './src/reducers/reducers'  
import Login from './src/Components/Login';
import Signup from './src/Components/Signup';
import Home from './src/Components/Home';
import Request from './src/Components/Request';




export default class App extends React.Component {
  render() {
      let store = createStore(reducers, {}, compose( applyMiddleware(thunk) ) )
      return (
    
        <Provider store={store}>
      <View style={{flex: 1}}>
        <Router>
          <Scene key="root">
            <Scene key="login"
              component={Login}
              title="login"
              initial
              hideNavBar
            />
         <Scene
              key="sign"
              component={Signup}
              title="sign"
              hideNavBar
          /> 
          <Scene
              key="home"
              component={Home}
              title="home"
              hideNavBar
          /> 
           <Scene
              key="request"
              component={Request}
              title="request"
              hideNavBar
          /> 
             
          </Scene>
        </Router>
        </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
