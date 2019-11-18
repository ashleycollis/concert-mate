import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import firebase from 'firebase';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      concerts: [],
      refresh: false,
      loading: true,
    };
  }
  componentDidMount() {
    this.loadFeed();
  }
  loadFeed = () => {
    this.setState({
      refresh: true,
      photos: [],
    });
    const that = this;
    firebase
      .database()
      .ref('photos')
      .orderByChild('posted')
      .once('value')
      .then(function(snapshot) {
        const exists = snapshot.val() !== null;
        if (exists) data = snapshot.val();
        const photos = that.state.photos;
        for (const photo in data) {
          const photoObj = data[photo];
          firebase
            .database()
            .ref('users')
            .child(photoObj.poster)
            .once('value')
            .then(function(snapshot) {
              const exists = snapshot.val() !== null;
              if (exists) data = snapshot.val();
              photos.push({
                id: photo,
                url: photoObj.post,
                caption: photoObj.caption,
                posted: photoObj.posted,
                author: data.username,
              });
              that.setState({
                refresh: false,
                loading: false,
              });
            })
            .catch(error => console.log(error));
        }
      });
  };
  loadNew = () => {
    this.loadFeed();
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Feed!</Text>
        </View>
        <FlatList
          refreshing={this.state.refresh}
          onRefresh={this.loadNew}
          data={this.state.photos}
          keyExtractor={(item, index) => index.toString()}
          style={{ flex: 1, backgroundColor: '#eee' }}
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={{
                width: '100%',
                overflow: 'hidden',
                marginBottom: 5,
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
              }}
            >
              <View>
                <Text>Time Ago</Text>
                <Text>Posted by: {item.author}</Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: item.url,
                  }}
                  style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: 275,
                  }}
                />
              </View>
              <View
                style={{
                  padding: 5,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text>Caption: {item.caption}</Text>
                <Text>Comments..</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
