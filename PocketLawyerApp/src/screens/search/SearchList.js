import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,Block,Image, ScrollView
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import NavigationContainer from '@react-navigation/native';
const SearchList = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
const onChangeSearch = query => setSearchQuery(query);

    return (
        <View>
            <View padding={10}>
            <Searchbar 
                placeholder="Tìm văn bản"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            </View>
            <Text>This is Search Screen</Text>
            <ScrollView>
    
                <Image  source={require('../../images/proRev.jpg')}/>
       
   
            </ScrollView>
        </View>
    )
}
export default SearchList;