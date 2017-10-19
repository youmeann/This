
import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many Art posters we want to have in each row and column
const cols = 3, rows = 3;

export default class ArtPoster extends Component {
  // Component prop types
  static propTypes = {
    
    art: PropTypes.object.isRequired,
    onOpen: PropTypes.func.isRequired,
  }
  render() {
    const { art, art: { title, artist, poster }, onOpen } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(art)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: poster }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.artist} numberOfLines={1}>{artist}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
    backgroundColor: 'transparent',
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: { 
    color: '#ffffff',
    fontSize: 14,
    marginTop: 4,
    textAlign:'center',
    
  },
  artist: {  
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 14,
    textAlign:'center',
  },
});