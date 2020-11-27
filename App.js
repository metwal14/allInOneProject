/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
} from 'react-native';
import FilterScreen from './filterScreen';
// 

/** Device Height */
const windowHeight = Dimensions.get('window').height;


const App = () => {
  return (
    <View style={styles.mainContainer}>
      <FilterScreen/>
    </View>

  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'#FAFAFA'
  },

});

export default App;
