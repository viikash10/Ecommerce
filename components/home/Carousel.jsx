import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {

    const slides = [
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
    ]
  return (
    <View style={styles.CarouselContainer}>  
        <SliderBox images={slides}
          dotColor= '#24AD50'
          inactiveDotColor= '#DDF0FF'
          ImageComponentStyle={{
            borderRadius: 15,
            width: "95%",
            marginTop: 20
          }}
          autoplay
          circleLoop
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    CarouselContainer:{
        flex: 1,
        alignItems: 'center'

    }
})