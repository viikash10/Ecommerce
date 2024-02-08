import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
   container:{
    flex: 1
   },
   upperRow:{
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 44,
    width: '90%',
    zIndex: 999
   },
   image:{
    aspectRatio: 1,
    resizeMode: "cover"
   },
   details:{
    marginTop: -20,
    backgroundColor: '#FAFAFC',
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: '100%'
   },
   titleRow:{
       marginHorizontal: 20,
       paddingBottom: 12,
       flexDirection: 'row',
       justifyContent: 'space-between',      
       alignItems: 'center',
       width: '90%',
       top: 5
   },
   title:{
    fontFamily: "bold",
    fontSize: 20,
    fontWeight: 'bold'
   },
   price:{
    paddingHorizontal: 10,
    fontFamily: 'semibold',
    fontSize: 20,
    fontWeight: 'bold',
   },
   priceWrapper:{
      backgroundColor: '#DDF0FF',
      borderRadius:20
   },
   ratingRow:{
      paddingBottom:12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
      top: 5
   },
   rating:{
    top:  20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20
   },
   ratingText:{
    color: 'grey',
    fontFamily: "medium",
    paddingHorizontal: 10
   },
   descriptionWrapper:{
    marginTop: 40,
    marginHorizontal: 20
   },
   description:{
       //fontFamily: 'medium',
       fontWeight: 'bold',
       fontSize: 20
   },
   desctxt:{
        fontFamily: 'regular',
        fontSize: 12,
         textAlign: 'justify',
         marginBottom: 12
   },
   location:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DDF0FF',
    marginHorizontal: 12,
    padding: 5,
    borderRadius: 20
   },
   cartRow:{
      paddingBottom: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
   },
   cartBtn:{
      width:'80%',
      height: 35,
      backgroundColor: 'black',
      padding: 6,
      borderRadius: 20,
      marginLeft: 12
   },
   cartTitle:{
      fontFamily: 'semibold',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
   },
   addCart:{
      width: 37,
      height: 37,
      borderRadius: 50,
      margin: 12,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 24,
   }
})

export default Styles ;