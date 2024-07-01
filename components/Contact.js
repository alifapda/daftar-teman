import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function Contact(props) {
  return (
    <View style={styles.container}>
      <Image source={props.gambar} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.judul}</Text>
        <Text style={styles.phone}>{props.telpon}</Text>
      </View>
    </View>
  );
}

Contact.propTypes = {
  gambar: PropTypes.any.isRequired,
  judul: PropTypes.string.isRequired,
  telpon: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  phone: {
    fontSize: 14,
    color: '#3498db',
  },
});
