import React from 'react';
import { Text, View, FlatList } from 'react-native';
import {Avatar} from 'react-native-elements';

export default class Profile extends React.PureComponent {
  
  static navigationOptions = {
    title: 'Exemplo'
  }

  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }

  getData(user){
    return fetch(`https://api.github.com/users/${user}`)
   .then((response) => response.json())
   .then((data) => {
    this.setState({data});
   })
   .catch((error) => {
     console.error(error);
   });

 }
 componentDidMount() {
  this.getData();
}
  
  render(){
    const { User } = this.props.route.params;
    this.getData(User.login);
  return (
    <View style = {{flex: 1, alignItems: 'center'}}>
      <View style = {{padding: 25}}>
        <Avatar
          size="xlarge"
          rounded
          source={{
          uri: `${this.state.data.avatar_url}`,
          }}
        />  
      </View>
      <Text>{this.state.data.name}</Text>
      <Text>{this.state.data.bio}</Text>
      <Text>Seguidores {this.state.data.followers}</Text>
      <Text>Seguindo {this.state.data.following}</Text>
    </View>
  );
}
}