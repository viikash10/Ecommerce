import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './Welcome.Styles'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'




const Welcome = () => {

  const navigation = useNavigation() ;
  return (
    <View >

        <View style={styles.container}>
             <Text style={styles.welcomeTXT('black', 20)}>{" "}Find The Most</Text>
             <Text style={styles.welcomeTXT('green', 0)}>{" "}Luxurious Furniture</Text>
        </View>
        
        <View style={styles.searchContainer}>

             <TouchableOpacity>
                <Feather name='search' size={24} style={styles.searchIcon} />
             </TouchableOpacity>

             <View style={styles.searchWrapper}>
                   <TextInput
                     style={styles.searchInput}
                     value=''
                     onPressIn={()=>{navigation.navigate('Search')}}
                     placeholder='What are you looking for?'
                   />
             </View>
             
             <View>
             <TouchableOpacity style={styles.searchBtn}>
                <Ionicons 
                name='camera-outline' 
                size={24}
                color='white'
                />
             </TouchableOpacity>
             </View>

        </View>

    </View>
  )
}

export default Welcome