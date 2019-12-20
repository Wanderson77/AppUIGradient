import React from 'react';
import { View, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function components() {
  return (
    <View  style={styles.view}/>
  );
}

const styles = StyleSheet.create({
    view:{
        flex:1
    }
})
