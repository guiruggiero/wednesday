import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wednesday: undefined,
      count: 0,
    }
  }

  handlePress = () => {
    let today = new Date();
    if (today.getDay() === 3) {
      this.setState({
        wednesday: true,
      });
    }
    else {
      this.setState({
        wednesday: false,
      });
    }

    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  }

  render() {
    return (
      <SafeAreaView style={[oneStyle.container,
        this.state.wednesday === true ? oneStyle.bgTrue : {},
        this.state.wednesday === false ? oneStyle.bgFalse : {}]}
      >
        <Text style={oneStyle.textStyle}>
          Is today Wednesday? 
        </Text>

        <Button
          title={this.state.wednesday === undefined ? "Get an answer" : "Check again"}
          color="blue"
          onPress={this.handlePress}/>

        <Text style={oneStyle.textStyle}>
          {this.state.wednesday === true ? "Yes, today is Wednesday!" : ""}
          {this.state.wednesday === false ? "No, today is not Wednesday." : ""}
        </Text>

        <Text style={oneStyle.textStyle}>
          {this.state.count === 3 ? "You having fun?" : ""}
          {this.state.count === 4 ? "Alright, stop it." : ""}
          {this.state.count > 5 ? "Go do something with your life!" : ""}
        </Text>
      </SafeAreaView>
    );
  }
}

const oneStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", 
    justifyContent: "space-around",
    alignItems: "center",
  },
  bgTrue: {
    backgroundColor: "green",
  },
  bgFalse: {
    backgroundColor: "red",
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
  }
});
