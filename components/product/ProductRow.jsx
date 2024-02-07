import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from '../home/headingStyles';
import ProductCardView from './ProductCardView';

const ProductRow = () => {

  const product = [1,2,3,4,5] ;


  return (
    <View style={{marginTop: 16, marginLeft: 12}}>
     <FlatList
     data={product}
     renderItem={({item})=> <ProductCardView/>}
     horizontal
     contentContainerStyle={{columnGap: 16}}
     />
    </View>
  )
}

export default ProductRow