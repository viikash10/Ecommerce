import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './ProductCardView.Style'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = () => {

 const navigation = useNavigation();

  return (
    <TouchableOpacity
     onPress={()=>navigation.navigate('ProductDetails')}
    >
    <View style={styles.container}>
           {/* Image container */}
          <View style={styles.imageContainer}>
           <Image
           source={{uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
           style={styles.image}
           />
          </View>

          {/* Image Details */}
          <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Sofa Luxurious</Text>
                <Text style={styles.supplier} numberOfLines={1}>Product</Text>
                <Text style={styles.price}>$253</Text>
          </View>

          {/* Add button */}
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons 
            name='add-circle'
            size={35}
            color='#2A4D50'
            />
          </TouchableOpacity>

    </View>



    </TouchableOpacity>
  )
}

export default ProductCardView