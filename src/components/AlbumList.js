import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class AlbumList extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    const response = await axios.get(
      "https://rallycoding.herokuapp.com/api/music_albums"
    );
    await console.log(response);
    await this.setState({ data: response.data });
  }

  render() {
    const { data } = this.state;
    let dataDisplay;
    data.length == 0
      ? (dataDisplay = <Text>loading ...</Text>)
      : (dataDisplay = data.map((album, index) => (
          <Text key={index}>{album.title}</Text>
        )));
    return <View>{dataDisplay}</View>;
  }
}

export default AlbumList;
