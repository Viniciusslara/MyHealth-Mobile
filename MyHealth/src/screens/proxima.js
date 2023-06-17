import {useIsFocused} from "@react-navigation/native";
import {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground, FlatList} from 'react-native'
import {estiloHome} from '../estilos/HomeStyle'
import {proximo, vacinas, atualiza} from "../componentes/ArrayVacinas";
  
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


            <FlatList data={vacinas} renderItem={({item}) => proximo({item}, props)} keyExtractor={item => item.id} 
            extraData={contador} numColumns={1}/>

            <View style={estiloHome.parteBotao}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('NovaVacina', {edicao: 0, id: -1})}}>
                        <Text style={estiloHome.buttontexto}> Nova Vacina </Text>
                </TouchableOpacity>
            </View>
 
        </View>
            
    )
}

export default Home;