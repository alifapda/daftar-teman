import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Contact from './Contact';

// Import gambar lokal
import Arpin from '../assets/arpin.png';
import deadpool from '../assets/deadpool.jpg';
import dr from '../assets/dr.jpg';
import hulk from '../assets/hulk.jpg';
import iron from '../assets/iron.jpg';
import marvel from '../assets/marvel.jpg';
import scarlate from '../assets/scarlate.jpg';
import spider from '../assets/spider.jpg';
import thanos from '../assets/thanos.jpg';
import saitama from '../assets/saitama.jpg';

const friends = [
  {
    id: 1,
    gambar: Arpin,
    judul: 'Arpin',
    telpon: '123-456-7890',
  },
  {
    id: 2,
    gambar: deadpool,
    judul: 'Naufal',
    telpon: '123-456-7890',
  },
  {
    id: 3,
    gambar: dr,
    judul: 'Elvan',
    telpon: '123-456-7890',
  },
  {
    id: 4,
    gambar: hulk,
    judul: 'Fauzul',
    telpon: '123-456-7890',
  },
  {
    id: 5,
    gambar: iron,
    judul: 'Prasetyo',
    telpon: '123-456-7890',
  },
  {
    id: 6,
    gambar: marvel,
    judul: 'Bramasta',
    telpon: '123-456-7890',
  },
  {
    id: 7,
    gambar: scarlate,
    judul: 'Lingga',
    telpon: '123-456-7890',
  },
  {
    id: 8,
    gambar: spider,
    judul: 'Pascal',
    telpon: '123-456-7890',
  },
  {
    id: 9,
    gambar: thanos,
    judul: 'RAFI',
    telpon: '123-456-7890',
  },
  {
    id: 10,
    gambar: saitama,
    judul: 'Rifki',
    telpon: '123-456-7890',
  },
];

const FriendsList = () => {
  return (
    <ScrollView style={styles.container}>
      {friends.map(friend => (
        <Contact
          key={friend.id}
          gambar={friend.gambar}
          judul={friend.judul}
          telpon={friend.telpon}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default FriendsList;
