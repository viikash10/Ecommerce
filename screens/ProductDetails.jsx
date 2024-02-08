import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from './ProductDetails.Styles'
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
const ProductDetails = () => {
  
  const [count,setCount] = useState(1) ;
  
  const  increment=()=>{
    setCount(count+1) ;
  }
   
  const  decrement=()=>{
    if(count==1) setCount(1);
    else
    {
      setCount(count-1) ;
    }
    
  }


  const navigation = useNavigation() ;
  return (
   <View style={Styles.container}>

       <View style={Styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}> 
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{}}> 
          <Ionicons name='heart' size={30} color={'#2A4D50'}/>
        </TouchableOpacity>
        </View>

        <Image 
         source={{uri: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
         style={Styles.image}
         />

         <View style={Styles.details}>
            {/* Title and price */}
            <View style={Styles.titleRow}>
              <Text style={Styles.title}>Product</Text>
              <View style={Styles.priceWrapper}>
                <Text style={Styles.price}>$660.8</Text>
              </View>
            </View>

            {/* Ratings */}
            <View style={Styles.ratingRow}>
              <View style={Styles.rating}>
                {
                  [1,2,3,4,5].map((index)=>(
                  <Ionicons
                  key={index}
                  name='star'
                  size={24}
                  color={'gold'}
                   />
                  ))
                }
                <Text style={Styles.ratingText}>(4.9)</Text>
              </View>
             
            {/* counter */}
            <View style={Styles.rating}>
              <TouchableOpacity onPress={()=>increment()}>
                <SimpleLineIcons name='plus' size={20} color={'#2A4D50'}/>
              </TouchableOpacity>
                <Text style={Styles.ratingText}> {count} </Text>
                <TouchableOpacity onPress={()=>decrement()}>
                <SimpleLineIcons name='minus' size={20} color={'#2A4D50'}/>
              </TouchableOpacity>
            </View>
            </View>

            {/* Description */}
            <View style={Styles.descriptionWrapper}>
              <Text style={Styles.description}>Description</Text>
              <Text style={Styles.desctxt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet tellus nunc, id interdum purus porta id. Nunc id risus sed neque mollis lobortis. Aliquam erat volutpat. Sed vitae consequat dui. Etiam vitae nisl a ligula tincidunt interdum. Nullam eget tellus eleifend, fringilla massa sit amet, dictum sem. Mauris tincidunt malesuada mi, eu ultrices est consequat quis. Pellentesque ut ultrices nunc. Quisque ut tincidunt magna, sit amet condimentum enim. Fusce condimentum ac eros sit amet porttitor. Fusce ut ultrices nunc, eget tincidunt justo. Quisque laoreet risus nec lacus tristique, ut vulputate nunc bibendum. Aliquam erat volutpat. Etiam in leo vel dolor consequat commodo. Sed id eros sit amet nulla eleifend dapibus. Nulla facilisi.
              </Text>
            </View>
            
            {/* Location & Delivery */}
            <View style={{marginBottom: 12}}>
                 <View style={Styles.location}>
                     <View style={{flexDirection: 'row'}}>
                      <Ionicons name='location-outline' size={20}/>
                      <Text>Bangalore</Text>
                     </View>

                     <View style={{flexDirection: 'row'}}>
                      <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
                      <Text> Free Delivery </Text>
                     </View>
                 </View>
            </View>


            {/* Buy button and cart option */}
            <View style={Styles.cartRow}>
                  {/* Buy button */}
                  <TouchableOpacity onPress={()=>{}} style={Styles.cartBtn}>
                    <Text style={Styles.cartTitle}> BUY NOW</Text>
                  </TouchableOpacity>

                  {/* cart option */}
                  <TouchableOpacity onPress={()=>{}} style={Styles.addCart}>
                  <Fontisto name='shopping-bag' size={22} color='white' />
                  </TouchableOpacity>
            </View >

         </View>
   </View>
  )
}

export default ProductDetails