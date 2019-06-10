import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: [],
  };
  async componentDidMount() {
    const response = await axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .catch(err => {
        console.log(`the error ${err}`);
      });
    await console.log(response);
    await this.setState({ albums: response.data });
  }

  renderAlbums() {
    const { albums } = this.state;
    let displayAlbums;
    albums.length == 0
      ? (displayAlbums = <Text>loading ...</Text>)
      : (displayAlbums = albums.map(album => (
          <AlbumDetail key={album.title} album={album} />
        )));

    return displayAlbums;
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
