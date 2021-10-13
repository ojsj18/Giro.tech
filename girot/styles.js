import {StyleSheet,Dimensions} from 'react-native';
const largura= Dimensions.get("screen").width;
const altura= Dimensions.get("screen").height;

const styl = StyleSheet.create({
    mais: {
        flex: 1,
        width:largura/5, 
        height:altura/10,
        flexDirection: 'column',
      },
      user: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:largura/5, 
        height:largura/5,
        flexDirection: 'column',
      },
      elementos: {
        flex: 4,
        backgroundColor: 'rgb(235, 237, 236)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        margin:5,
        width:largura,
        height:altura/10,
        flexDirection:'column',
      },
      home: {
        flex: 2,
        //backgroundColor: 'rgb(235, 237, 236)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width:largura,
        height:altura/10,
        flexDirection:'column',
      },
      hometodo: {
        flex: 5,
        //backgroundColor: 'rgb(235, 237, 236)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,  
        width:largura,
        height:altura/10,
        flexDirection:'column',
        marginTop: 30,
        marginBottom: 10,
      },
      elementosremovidos: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 30,
        margin:20,
        width:largura/2,
        height:altura/12,
        flexDirection:'row',
      },
      concluidos: {
        backgroundColor: '#fff',
        borderRadius: 30,
        margin:5,
        width:largura,
        height:altura/8,
        flexDirection:'column',
      },
      nome: {
        flex: 1,
        backgroundColor: 'rgb(235, 237, 236)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 1,
        width:largura,
        height:altura/5,
        flexDirection:'column',
      },
      box: {
        width: largura/3,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      box2: {
        width: largura/2,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      prior: {
        flex: 1/5,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
     
        width:largura,
        height:altura/5,
        flexDirection:'row',
      },
      desc: {
        flex: 2,
        backgroundColor: 'rgb(235, 237, 236)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width:largura,
        height:altura/5,
        flexDirection:'column',
        padding: 20,
      },
      notinhas2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width:largura,
        height:altura/10,
        flexDirection:'column',
        borderWidth: 2,
        borderBottomColor: 'red'
      },
      notinhas3: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width:largura/2,
        height:altura/10,
        flexDirection:'column',
        borderWidth: 2,
      },
      notinhas1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width:largura,
        height:altura/10,
        flexDirection:'column',
        borderWidth: 2,
        borderBottomColor: 'orangered'
      },
      notinhas: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width:largura*0.95,
        height:altura/10,
        flexDirection:'column',
        borderWidth: 2,
        borderBottomColor: 'green'
      },
      modals: {
        bottom: 0,
        position: 'absolute',
        height: '50%',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 30,
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      regular: {
        fontSize: 30,
        fontFamily: 'sans-serif',
        textAlign: 'center',
        //fontWeight: 'normal',
        width: 200
        
      },
      sub: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
        width: 100
      },
  });
export default styl;