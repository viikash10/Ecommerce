import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,Fontisto } from '@expo/vector-icons'
import styles  from './Home.Styles'
import Welcome from '../components/home/Welcome'
import Caraousel from '../components/home/Carousel'
import Headings from '../components/home/Headings'
import ProductRow from '../components/product/ProductRow'




const Home = () => {
  return (
    <SafeAreaView>
       <View style={styles.appBarWrapper }>
           <View style={styles.appBar}>
           
           <Ionicons name='location-outline' size={24}/>
           <Text style={styles.location}>Indore, India</Text>

           <View style={{alignItems: 'flex-end'}}>
                
                <View style={styles.cartCount}>
                  <Text style={styles.cartNumber}>10</Text>
                 </View>
                <TouchableOpacity>
                <Fontisto name='shopping-bag' size={24} />
                </TouchableOpacity>
           </View>

           </View>
       </View>
       <ScrollView>
             <Welcome/>
             <Caraousel/>
             <Headings/>   
             <ProductRow/>   
       </ScrollView>
    </SafeAreaView>
  )
}

export default Home


