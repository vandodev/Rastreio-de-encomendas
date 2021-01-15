import { StyleSheet} from 'react-native';

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      container2: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  
      button_home:{
        marginRight:0
      },
  
      textPage:{
          backgroundColor: 'orange', 
          padding: 20
      },
    

        darkbg:{
        backgroundColor: '#333'
        },

        login__msg:(text='none')=>({
            fontWeight:'bold',
            fontSize:22,
            color:'red',
            marginTop:10,
            marginBottom:15,
            display:text
          }),

        login__form:{
        width:'80%'
        },

        login__input:{
        backgroundColor:'#fff',
        fontSize:19,
        padding: 7,
        marginBottom:15
        },

        login__button:{
        padding:12,
        backgroundColor:'#f58634',
        alignSelf:'center',
        borderRadius:10
        },

        login__bottonText:{
        fontWeight:'bold',
        fontSize:22,
        color:'#333'
        },

        login__logomarca:{
            marginBottom:10
        }
  });

  export {css}; 