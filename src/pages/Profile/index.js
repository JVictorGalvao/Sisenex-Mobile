import React from 'react';
import { Text, View, FlatList } from 'react-native';
import {Avatar} from 'react-native-elements';


// import { Container } from './styles';

export default class Profile extends React.PureComponent {
  
  static navigationOptions = {
    title: 'Profile'
  }

  constructor(props) {
    super(props);
    this.state = {
      //data: [],
      user: '',
    }
  }
/*componentDidMount(){ 
    return fetch(`${this.props.route.params.item.url}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          data: responseJson.users,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
_renderItem = ({item}) => {
  return  (
      <Text>
        {item.url}
      </Text>
  )
}*/
  render(){
  const { User } = this.props.route.params;
  return (
    <View style = {{flex: 1, alignItems: 'center'}}>
      <View style = {{padding: 25}}>
        <Avatar
          size="xlarge"
          rounded
          source={{
          uri: `${User.avatar_url}`,
          }}
        />  
      </View>
      <Text>{User.url}</Text>
    </View>
  );
}
}