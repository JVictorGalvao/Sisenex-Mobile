import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import {Searchbar} from 'react-native-paper';
import {Avatar} from 'react-native-elements';
//import Profile from '../Profile';
//import Api from './inputbox';


// import { Container } from './styles';

export default function Home({navigation}) {

  function navigateToProfile(){
    navigation.navigate('Profile')
  }
  return (
      <Api />   
  );
}

class Api extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      isLoading: true,
      firstQuery: '',
    };    
  }


  fetchData = () => {
    const user = this.state.user;
    return fetch(`https://api.github.com/search/users?q=${user}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.items,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
        <Searchbar
          placeholder="Enter Github username"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.props.user}
          onChangeText={user => this.setState({user})}
          onIconPress={this.fetchData}
        />
        <FlatList
          style={{alignContent: 'stretch', alignSelf: 'stretch'}}
          data={this.state.dataSource}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={this.navigateToProfile} //trocar de pagina
              style={{
                flexDirection: 'row',
                padding: 10,
                alignItems: 'stretch',
              }}>
              <Avatar
                size="large"
                rounded
                source={{
                  uri: `${item.avatar_url}`,
                }}
              />
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                {item.login}
              </Text>
              <Text style={{textAlignVertical: 'auto', textAlign: 'left'}}>
                {' '}
                {item.type}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={({id}) => id.toString()}
        />
        <Button title='pega merda' onPress={this.props.navigateToProfile}/>
      </View>
    );
  }
}