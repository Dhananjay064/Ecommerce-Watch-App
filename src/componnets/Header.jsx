import {StyleSheet, Text, TouchableOpacity,View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {AntDesign} from 'react-native-vector-icons/AntDesign'
import { iconSize } from '../utility/dimensons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation=useNavigation()


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headfeature} onPress={() => navigation.goBack()}>
        <Ionicons name={"arrow-back"} size={iconSize.md} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headfeature}>
      <Ionicons name={"heart"} size={iconSize.md} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
});
