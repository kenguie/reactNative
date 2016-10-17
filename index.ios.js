import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import axios from 'axios';

class App extends Component {
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Header headerText={'Albums!'} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
