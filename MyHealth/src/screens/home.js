import {useIsFocused} from "@react-navigation/native";
import {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {estiloHome} from '../estilos/HomeStyle'
import {modelo, vacinas} from "../componentes/ArrayVacinas";



  
const Home = (props) =>{

    const [contador, setContador] = useState(0);    
    const foco = useIsFocused();

    useEffect(() => {
      if (foco) {
        setContador(contador + 1);
      }
    }, [foco]);

    return(
        <View style={estiloHome.container}> 
        
            <View style={estiloHome.container2}> 
                <View style={estiloHome.barraPesquisa.pesquisa}>
                        
                        <Image style={estiloHome.imagem2} source={require('../imagens/lupa.png')}/>
                        <TextInput placeholder=' Pesquisar Vacina...'/>
                </View>
            </View>

            <FlatList data={vacinas} renderItem={({item}) => modelo({item}, props)} keyExtractor={item => item.id} 
            extraData={contador} numColumns={2}/>
      
            <View style={estiloHome.parteBotao}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('NovaVacina', {edicao: 0, id: -1})}}>
                        <Text style={estiloHome.buttontexto}> Nova Vacina </Text>
                </TouchableOpacity>
            </View>
        </View>
            
    )
}

export default Home;