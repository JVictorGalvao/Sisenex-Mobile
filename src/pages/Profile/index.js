import React from 'react';
import { Text, View, FlatList } from 'react-native';
import {Avatar} from 'react-native-elements';

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