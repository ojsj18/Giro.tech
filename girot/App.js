import { StatusBar } from 'expo-status-bar';
import React,{Fragment,useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, Text, View, Dimensions, FlatList,Modal,TouchableOpacity,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js';

const largura= Dimensions.get("screen").width;
const altura= Dimensions.get("screen").height;


export default function App() {

  const nova={
    nome:'',
    texto:'',
    prioridade:'',
    pos:'',
}
  const [visible,setvisible] = useState(false);
  const [todo,settodo] =useState([]);
  const [removidos,setremovidos]= useState([])
  const [confirma,setconfirma] = useState(false);
  const [confirma2,setconfirma2] = useState(false);
  const [pos,setpos] =useState(0);
  const [prioridade,setprioridade] =useState(0);
  const [notam,setnotam] = useState(false);
  const [infs,setinfs] =useState([]);
  const [nomes,setnomes] =useState("");
  const [desc,setdesc] =useState("");
  //const [priori,setpriori] =useState(0);
  
  let datacriação="";

  const salvar= ()=>{
    console.log("apertou salvar")
  
    var Data = new Date();
    var dia = Data.getDate();
    var mes = Data.getMonth(); 
    var ano4 = Data.getFullYear();
    datacriação= dia + '/' + (mes+1) + '/' + ano4;

    const novaNota={
        nome: nomes,
        texto:desc,
        nivel:prioridade,
        data: datacriação,
   }
    todo.push(novaNota)
    var ordenada= todo.sort(function (a, b) {
      if (a.nivel > b.nivel) {
        return -1;
      }
      if (a.nivel < b.nivel) {
        return 1;
      }
      return 0;
    });
    setdesc("");
    setnomes("");
    setvisible(false);
};
  const modal= ()=>{
    setvisible(true);
    console.log("apertou add")
  };

  const priori= (num)=>{
      setprioridade(num);
  };

  const salvaitem= (item)=>{
    setconfirma(true);
    setpos(todo.indexOf(item))
    setinfs(item)
  };

  const salvaitem2= (item)=>{
    setconfirma2(true);
    setpos(removidos.indexOf(item))
    setinfs(item)
    console.log(pos)
    console.log(infs)
  };

  const salvanota= (item)=>{
    setnotam(true);
    setinfs(item)
  };
  const cor=(a)=>{
    
    if(a==0){
      return styles.notinhas
    }
    else if(a==1){
      return styles.notinhas1
    }
    else if(a==2){
      return styles.notinhas2
    }
  }
  const borda=(num)=>{
    if(num==prioridade){
      return [{borderWidth: 2}]
    }
  }

  const removerNota= ()=>{
    todo.splice(pos,1)
    const remov =removidos.push(infs)

    const novalista= todo.slice()
    settodo(novalista)
    setconfirma(false)
  };

  const restaurarNota= (bool)=>{
    setpos(removidos.indexOf(infs))
    console.log(removidos)
    console.log("posição "+pos)
    if(bool){
      todo.push(infs)   
      removidos.splice(pos,1)
      setconfirma2(false)
    }
    else{
      removidos.splice(pos,1)
      setconfirma2(false)
    }

  };

  return (
    <View style={styles.home}>
      <Fragment>
      <Modal
            animationType={'slide'}
            transparent={false}
            visible= {visible}
            onRequestClose={() => {setvisible(!visible);
            }}
          >
          <Fragment>
            <Text style={styles.regular}> New... </Text>
          </Fragment>
          <View style={styles.nome}>
            <TextInput 
            onChangeText={texto => setnomes(texto)}
            placeholder={"name"}/>
          </View>
          <View style={styles.prior}>
            <TouchableOpacity onPress={() => priori(0)} style={borda(0)}>
              <View style={[styles.box, { backgroundColor: "mediumseagreen" }]}>
                  <Text style={{ color: '#fff' }}>low</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => priori(1)} style={borda(1)}>
              <View style={[styles.box, { backgroundColor: "orange" }]}>
              <Text style={{ color: '#fff' }}>medium</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => priori(2)} style={borda(2)}>
              <View style={[styles.box, { backgroundColor: "orangered" }]}>
              <Text style={{ color: '#fff' }}>high</Text>
              </View>
            </TouchableOpacity>
          </View>  
          <View style={styles.desc}>
            <TextInput 
            onChangeText={texto => setdesc(texto)}
            placeholder={"description"}/>
          </View> 
          <Button
              title="Save "
              onPress={() => salvar()}
                  /> 
        </Modal>
      </Fragment>

      <View style={styles.user}>
            <Text style={styles.regular}> Hello </Text>
      </View>
      <View style={styles.elementos}>
          <FlatList
            data={todo}
            extraData={settodo}
            keyExtractor={(item, index) => index.toString()}
            renderItem = {({item}) =>
              <View style={styles.hometodo}>
                <View>
                    <TouchableOpacity style={cor(item.nivel)} onPress={() => salvanota(item)}>
                        <Text style={{fontSize:20},{width: 100}} numberOfLines={1} ellipsizeMode='tail' >{item.nome}</Text>  
                    </TouchableOpacity>
                </View>    
                  <TouchableOpacity onPress={() => salvaitem(item)}>
                    <Icon name="trash" size={25} color="black" />
                  </TouchableOpacity>
              </View>
            }
          />
      <View>
      <Modal
          animationType={'slide'}
          style= {styles.modals}
          transparent={true}
          visible= {confirma}
          onRequestClose={() => {setconfirma(!confirma)}}
          >
          <View style={styles.modals}>
            <Text style={styles.regular}>Remove?</Text>
            <View style={styles.prior}>
              <TouchableOpacity onPress={() => removerNota()}>
                  <View style={[styles.box2, { backgroundColor: "orangered" }]} >
                    <Text style={{ color: '#fff' }}>allow</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setconfirma(false)}>
                  <View style={[styles.box2, { backgroundColor: "mediumseagreen" }]}>
                  <Text style={{ color: '#fff' }}>denied</Text>
                  </View>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
      <Modal
          animationType={'slide'}
          style= {styles.modals}
          transparent={true}
          visible= {notam}
          onRequestClose={() => {setnotam(!notam)}}
          >
          <View style={styles.modals}>
          <Text style={styles.regular}> {infs.nome} </Text>
          <Text style={styles.regular2}>date: {infs.data} </Text>
          <Text>{infs.texto}</Text>
          </View>
      </Modal>
      <Modal
          animationType={'slide'}
          style= {styles.modals}
          transparent={true}
          visible= {confirma2}
          onRequestClose={() => {setconfirma2(!confirma2)}}
          >
          <View style={styles.modals}>
            
            <View style={styles.prior}>
              <TouchableOpacity onPress={() => restaurarNota(true)}>
                  <View style={[styles.box2, { backgroundColor: "mediumseagreen" }]} >
                    <Text style={{ color: '#fff' }}>restaure</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => restaurarNota(false)}>
                  <View style={[styles.box2, { backgroundColor: "orangered" }]}>
                  <Text style={{ color: '#fff' }}>permanently remove</Text>
                  </View>
              </TouchableOpacity>
            </View>
          </View>

      </Modal>  
      </View>
        <View style={styles.concluidos}>
        <FlatList
            data={removidos}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            renderItem = {({item}) =>
              <View style={styles.elementosremovidos}>
                <View style={{marginLeft:10}}>
                    <TouchableOpacity  style={styles.notinhas3}  onPress={() => salvanota(item)}>
                        <Text style={{fontSize:10},
                        {width: 100}} 
                        numberOfLines={1} 
                        ellipsizeMode='tail'>{item.nome}</Text>  
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft:20}}>
                  <TouchableOpacity onPress={() => salvaitem2(item)}>
                    <Icon name="navicon" size={25} color="black" />
                  </TouchableOpacity>
                </View>   
              </View>
            }
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => modal()}>
        <View >
          <Icon name="plus" size={30} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}