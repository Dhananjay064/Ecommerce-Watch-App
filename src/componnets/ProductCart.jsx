import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { spacing ,fontSize} from '../utility/dimensons'
import { fontFamily } from '../utility/fonts'
import {colors} from '../utility/colors'
import { useNavigation } from '@react-navigation/native'


const imgurl='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1725993983/Croma%20Assets/Communication/Wearable%20Devices/Images/309325_0_fwabll.png';

const ProductCart = ({item}) => {
    // hook navigation
    const navigation=useNavigation()
    const handleProductNavigationDetailScreen=()=>{
        navigation.navigate('PRODUCT_DETAILS',{item})
    }
  return (
    <TouchableOpacity style={styles.container} onPress={handleProductNavigationDetailScreen}>
        <View style={styles.imageWrapper}>
        <Image 
           source={{uri:item.image}}
           style={styles.productImage}  
          />
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.name} numberOfLines={1}>{item.name} </Text>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCart

const styles = StyleSheet.create({
    container:{
        width:'48%',
        elevation:5,
        padding:spacing.sm,
        backgroundColor:colors.background,
        borderRadius:12,
        marginVertical:spacing.md,
    },
    imageWrapper:{
        borderRadius: 12,
        backgroundColor: "#FFC8B7",
        margin: spacing.sm,    
    },
    productImage:{
        height:120,
        width:'100%',
        resizeMode: "center",
    },
    contentContainer:{
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.md,
    },
    name:{
        fontFamily:fontFamily.SemiBold,
        fontSize: fontSize.md,
        color:colors.black,
    },
    brand:{
        fontFamily:fontFamily.Medium,
        color:colors.gray,
        fontSize:fontSize.sm,
        paddingVertical:spacing.xs,
    },
    price:{
        fontFamily:fontFamily.Medium,
        color:colors.purple,
        fontSize: fontSize.md,
    }

})