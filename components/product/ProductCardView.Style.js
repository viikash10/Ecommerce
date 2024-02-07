import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
         width: 182,
         height: 240,
         marginEnd: 22,
         borderRadius: 16,
         backgroundColor: '#DDF0FF'
    },
    imageContainer:{
        flex: 1,
        width: 170,
        marginLeft:6,
        marginTop: 6,
        borderRadius: 12,
        overflow: "hidden"
    },
    image:{
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details:{
        padding: 12
    },
    title:{
        fontFamily: "bold",
        fontSize: 20,
        marginBottom: 2,
        fontWeight: 'bold'  
    },
    supplier:{
        fontFamily: "regular",
        fontSize: 12,
        color: '#83829A'
    },
    price:{
        fontFamily: "bold",
        fontSize: 16,
        fontWeight: 'bold'  
    },
    addBtn:{
        position: 'absolute',
        bottom: 10,
        right: 10
    }

})

export default styles;