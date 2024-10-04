import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from "../components/Map";
import SelectedScooterSheet from "../components/SelectedScooterSheet"
const MapScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Map />
      <SelectedScooterSheet />
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})