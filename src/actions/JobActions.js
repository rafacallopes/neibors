import { Actions } from 'react-native-router-flux';
import {
  SEARCH_CHANGED,
  
} from './types';

export const searchChanged = (text) => {
  return {
    type: SEARCH_CHANGED,
    payload: text
  }; 
};


