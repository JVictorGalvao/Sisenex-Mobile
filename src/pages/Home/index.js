import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import {Searchbar} from 'react-native-paper';
import {Avatar} from 'react-native-elements';

export default class Home extends React.PureComponent {
  static navigationOptions = {
      title: 'Home'
  }
  constructor(props) {
    super(props);
    this.state = {
      //data: [],
      user: '',
    }
  }

  fetchData = () => {
    const user = this.state.user;
    return fetch(`https://api.github.com/search/users?q=${user}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          data: responseJson.items,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  _renderItem = ({item}) => {
      return  (
          <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
              <Avatar
                size="medium"
                rounded
                source={{
                  uri: `${item.avatar_url}`,
                }}
              />
              <Text style={{marginLeft: 10,fontWeight: 'bold'}}>{item.login}</Text>
              <Text style={{marginLeft: 10}}>{item.type}</Text>
          </TouchableOpacity>
      )
  }

  _onItemPress = (item) => {
      this.props.navigation.navigate('Profile', {User: item})
  } 

  render() {
      return (
        <View>
          <Searchbar
            placeholder="Enter Github username"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.props.user}
            onChangeText={user => this.setState({user})}
            onIconPress={this.fetchData}
          />
          <FlatList 
              data={this.state.data}
              renderItem={this._renderItem}
              keyExtractor={({id}) => id.toString()}
              ItemSeparatorComponent={()=>
                  <View style={{height:1, backgroundColor: '#f7f7f7'}} 
              />}
          />
      </View>
      )
  }
}


/*export default function Home({navigation}) {

  function navigateToProfile(){
    navigation.navigate('Profile')
  }
  
  return (
      
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
        <Api />
        <Button title="esse" onPress={navigateToProfile}/>
        
      </View>   
  );
}

class Api extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      isLoading: true,
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
              onPress={() => navigateToProfile()} //trocar de pagina
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
        </View>
    );
  }
}*/