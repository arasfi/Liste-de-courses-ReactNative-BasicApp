import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
// import { uuid } from 'uuidv4';
const App = () => {

    const [items, setItems] = useState([
        {id: 1, text: 'Lait'},
        {id: 2, text: 'Oeufs'},
        {id: 3, text: 'Pain'},
        {id: 4, text: 'Jus'},
    ])

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id)
        });
    }

    const addItem = (text) => {
        if (!text) 
        {
            Alert.alert('Erreur', 'Tapez un element SVP!')
        }
        else
        {
            setItems(prevItems => {
                return [{id: 5, text: text} , ...prevItems]
            })
        }
    }

    return ( 
        <View style={styles.container}>
            <Header title="Liste de courses" />
            <AddItem addItem={addItem} />
            <FlatList
             data = {items}
             renderItem = {({item}) => 
                <ListItem item = {item} deleteItem = {deleteItem} />
             } />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
    
})


export default App;