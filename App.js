import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './src/reducers/reducers'  
import Login from './src/Components/Login';

export default class App extends React.Component {
  render() {
      let store = createStore(reducers, {}, compose( applyMiddleware(thunk) ) )
      return (
    
        <Provider store={store}>
    
        <Router>
          <Scene key="root">
            <Scene key="login"
              component={Login}
              title="login"
              initial
              hideNavBar
            />
            {/* <Scene
              key="main"
              component={Main}
              title="main"
              initial
              hideNavBar
            />
             <Scene
              key="add"
              component={Add}
              title="add"
              hideNavBar */}
              
            />
          </Scene>
        </Router>
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
