import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from './../utility/colors';
import { Header } from 'react-native/Libraries/NewAppScreen';

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
       {/* header */}
       {/* <Header/> */}
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.background,
        padding:10,
    }    
})