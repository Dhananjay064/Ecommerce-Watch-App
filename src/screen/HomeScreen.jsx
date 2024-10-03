import { StyleSheet, Text, View ,Image,TextInput} from 'react-native'
import React from 'react'
import { fontSize, spacing ,iconSize} from '../utility/dimensons'
import {colors} from '../utility/colors'
import { fontFamily } from '../utility/fonts'
import Category from '../componnets/Category'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find your suitable
      watch now.</Text>

      {/* Search container */}
      <View style={styles.maincontainer}>
        {/* input search */}
        <View style={styles.inputwrap}>
          <Image 
           source={require("../assets/search.png")}
           style={styles.logo}
          />
          <TextInput 
          style={styles.textInput}
          placeholder='Search Product' 
          placeholderTextColor={colors.placeholderText}/>
        </View>
        <View style={styles.catcatgeory}>
        <Image 
           source={require("../assets/category.png")}
           style={styles.logo}
          />
        </View>

      </View>      
    <Category/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background,
    padding:20
  },
  headline:{
    color:colors.black,
    fontSize:fontSize.xxl,
    fontFamily:fontFamily.Bold,
  
  },
  maincontainer:{
    flexDirection:'row',
    marginVertical:20,
    alignItems:'center',
  },
  inputwrap:{
    flex: 1,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md,

  },
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
    marginleft:4,
  },
  catcatgeory:{
    paddingHorizontal: spacing.sm,
  }
    
})