import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

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

    // this.setState({
    //   wednesday: false,
    // });

    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  }

  render() {
    return (
      <View style={[oneStyle.container,
        this.state.wednesday === true ? oneStyle.bgTrue : {},
        this.state.wednesday === false ? oneStyle.bgFalse : {}]}
      >
        <Text style={oneStyle.title}>
          {"\n\nIs today Wednesday?\n\n\n"}
        </Text>

        <Text style={oneStyle.answer}>
          {this.state.wednesday === true ? "YES" : ""}
          {this.state.wednesday === false ? "NO" : ""}
        </Text>

        <Text style={oneStyle.subAnswer}>
          {this.state.wednesday === true ? "Happy hump day!\n\n\n\n" : ""}
          {this.state.wednesday === false ? "Hopefully it's already Friday\n\n\n\n" : ""}
        </Text>

        <Button
          title={this.state.wednesday === undefined ? "Get an answer" : "Check again"}
          color="blue"
          onPress={this.handlePress}/>

        <Text style={oneStyle.sassy}>
          {this.state.count === 3 ? "\n\nYou having fun?" : ""}
          {this.state.count === 5 ? "\n\nAlright, stop it." : ""}
          {this.state.count > 6 ? "\n\nGo do something with your life!" : ""}
        </Text>

        <Text style={oneStyle.credits}>
          {"\n\n\nBrought to you by:"}
        </Text>

        <Text
          style={oneStyle.link}
          onPress={() => Linking.openURL("https://guiruggiero.com/")}
        >
          Gui Ruggiero
        </Text>
      </View>
    );
  }
}

const oneStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", 
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bgTrue: {
    backgroundColor: "#44d46c",
  },
  bgFalse: {
    backgroundColor: "#ec445c",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  answer: {
    fontSize: 120,
    fontWeight: "bold",
    color: "white",
  },
  subAnswer: {
    fontSize: 20,
  },
  sassy: {
    fontSize: 20,
    fontWeight: "bold",
  },
  credits: {
    fontSize: 12,
  },
  link: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
