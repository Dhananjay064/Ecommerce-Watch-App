import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {fontSize, spacing, iconSize} from '../utility/dimensons';
import {colors} from '../utility/colors';
import {fontFamily} from '../utility/fonts';
import Category from '../componnets/Category';
import ProductCart from '../componnets/ProductCart';
import {smartwatch} from '../data/smartwatch';
import {headphone} from '../data/headphone';

const HomeScreen = () => {
  const [data, setdata] = useState(smartwatch);

  const [selectCategory, setSelectCategory] = useState('Smart Watch');
 
  const HandleCategory = newcategory => {
    if (newcategory == 'Smart Watch') {
      setdata(smartwatch);
    } else if (newcategory == 'Headphone') {
      setdata(headphone);
    }
    setSelectCategory(newcategory);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false} // To hide vertical scrollbar
    >
      <View style={{padding: 20}}>
        <Text style={styles.headline}>Find your suitable watch now.</Text>

        {/* Search container */}
        <View style={styles.maincontainer}>
          {/* Input search */}
          <View style={styles.inputwrap}>
            <Image
              source={require('../assets/search.png')}
              style={styles.logo}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Search Product"
              placeholderTextColor={colors.placeholderText}
            />
          </View>
          <View style={styles.catCategory}>
            <Image
              source={require('../assets/category.png')}
              style={styles.logo}
            />
          </View>
        </View>

        {/* Category section */}
        <Category
          selectCategory={selectCategory}
          HandleCategory={HandleCategory}
        />
      </View>
      {/* Product listing */}
      <FlatList
        data={data}
        renderItem={({item, index}) => <ProductCart item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: 300,
        }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false} // Disable FlatList's scroll to allow ScrollView to handle it
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  headline: {
    color: colors.black,
    fontSize: fontSize.xxl,
    fontFamily: fontFamily.Bold,
  },
  maincontainer: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  inputwrap: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: 4,
  },
  catCategory: {
    paddingHorizontal: spacing.sm,
  },
});
