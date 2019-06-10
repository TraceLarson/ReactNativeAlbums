import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
};

export default AlbumDetail;
