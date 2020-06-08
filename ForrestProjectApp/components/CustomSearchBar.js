import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default CustomSearchBar = props => {
  const [searchText, setSearchText] = useState("");

  let deviceType = "hallo";

  const searchHandler = () => {
    console.log("...");
  }

  const onDelete = () => {
    setSearchText("");
    console.log("Deleted " + searchText);
  }

  return (
      <SearchBar 
        containerStyle={styles.searchBar} 
        inputContainerStyle={styles.inputSearchBar}
        placeholder={props.placeholder} 
        value={searchText}
        onChangeText={(val) => { setSearchText(val) }}
        autoCorrect={false}
        lightTheme={true}
        searchIcon={false}      
        clearIcon={<Ionicons name="md-close" size={16} color="black" onPress={onDelete} />}
      />
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchBar: {
    flex: 1,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderTopWidth: 0,    
  },

  inputSearchBar: {
    backgroundColor: "#EEE",
  },

});
