import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
      container:{
        width: '100%',
      },
      welcomeTXT: (color,top)=>({
        fontFamily: 'bold',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: top,
        color: color,
        marginHorizontal: 12

      }),

      searchContainer:{
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#e3f2ff',
        borderRadius: 8,
        marginVertical: 12,
        height: 50
      },

      searchIcon:{
        marginHorizontal:10,
        color: 'grey',
        marginTop: 12
      },

      searchWrapper:{
        flex: 1,
        //backgroundColor: ,
        marginRight: 10,
        borderRadius: 8,
      },

      searchInput:{
        fontFamily: "regular",
        width: '100%',
        height: '100%',
        paddingHorizontal: 10
      },

      searchBtn:{
        width: 50,
        height: '100%',
        backgroundColor: '#2A4D50',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
      }
})


export default styles ;