import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hola Mundo!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MainScreen;
