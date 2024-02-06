import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import {styles} from './Home.Styles'




const Home = () => {
  return (
    <SafeAreaView>
       <View style={styles.appBarWrapper}>
           <View style={styles.appBar}>
           
           <Ionicons name='location-outline' size={24}/>

           </View>
       </View>
    </SafeAreaView>
  )
}

export default Home