import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'

export default function MainScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textworld}>Hello World</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer:{
 flex:1,
 justifyContent:'center',
 alignSelf:'center',
 
 
  },
  textworld:{
    fontSize:20,
    fontWeight:'bold',
    color:'#000'
  }
})