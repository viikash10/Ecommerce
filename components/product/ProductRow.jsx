import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from '../home/headingStyles';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';
import axios from 'axios';
import { Alert } from 'react-native';


const ProductRow = () => {

  const {data,loading,error} = useFetch();

  const product = [1,2,3,4] ;

 
  return (
    <View style={{marginTop: 16, marginLeft: 12}}>
    {
      loading ? 
      (<ActivityIndicator size={40} color={'#2A4D50'}/>)
      :
      error ? 
      (Alert.alert(error.message))
      :
      (
        <FlatList
     data={data}
     keyExtractor={(item)=> item._id}
     renderItem={({item})=> <ProductCardView/>}
     horizontal
     contentContainerStyle={{columnGap: 16}}
     />
      )
    }
   
    </View>
  )
}

export default ProductRow