import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './Search.Styles'
import { Ionicons,Feather } from '@expo/vector-icons'

const Search = () => {
  return (
    <SafeAreaView>
       <View style={styles.searchContainer}>

       <TouchableOpacity>
       <Ionicons 
       name='camera-outline' 
       size={24}
       color='white'
       style={styles.searchIcon}
       />
       </TouchableOpacity>

       <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        value=''
        onPressIn={()=>{}}
        placeholder='What are you looking for?'
      />
      </View>

    <View>
      <TouchableOpacity style={styles.searchBtn}>
      <Feather name='search' size={24} color='white'
      />
      </TouchableOpacity>
    </View>

</View>
    </SafeAreaView>
  )
}

export default Search