import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Item,
} from 'react-native';
import React, { useState } from 'react';
import { fontSize, spacing ,iconSize} from '../utility/dimensons'
import {colors} from '../utility/colors'
import { fontFamily } from '../utility/fonts'

const category = [
  {
    id: 1,
    name: 'Smart Watch',
  },
  {
    id: 2,
    name: 'Headphone',
  },
  {
    id: 3,
    name: 'Apple',
  },
  {
    id: 4,
    name: 'Samsung',
  },
  {
    id: 5,
    name: 'Xiaomi',
  },
  {
    id: 6,
    name: 'Huawei',
  },
];

const Category = ({selectCategory,HandleCategory}) => {
 
    return (
      <FlatList 
        data={category}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={()=>{HandleCategory(item.name)}}
          >
            <Text
              style={[
                
                styles.categoryText,
                selectCategory === item.name && {
                  color: colors.purple,
                  alignItems:'center'
                },
              ]}>
              {item.name}
            </Text>
            {selectCategory === item.name && <View style={styles.underline} />}
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        horizontal
        ItemSeparatorComponent={<View style={{paddingHorizontal: spacing.sm}} />}
        showsHorizontalScrollIndicator={false}
        
      />
    );
  };
  
  export default Category;
  
  const styles = StyleSheet.create({
    categoryText: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.SemiBold,
      color: colors.gray,
    },
    underline: {
      borderBottomColor: colors.purple,
      borderBottomWidth: 2,
      width: '50%',
      marginTop: spacing.sm,
    },
  });