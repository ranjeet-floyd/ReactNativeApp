/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Modal, Image, Button } from 'react-native';
import Hello from './src/components/hello';
import PlayerInput from './src/components/PlayerInput';
import PlayerList from './src/components/PlayerList';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {


  state = {
    players: [],
    selectedPlayer: null
  };

  selectPlayer = (player) => {
    console.log("selectPlayer", player);
    this.setState({
      selectedPlayer: player
    })
  }

  addPlayer = (player) => {
    const copy = [...this.state.players];
    copy.push(player);
    this.setState({
      players: copy
    },
      () => { console.log("Players :", this.state.players) }
    )
  }

  handleModelClose = () => {
    this.setState({
      selectedPlayer: null
    });
  }

  handleModelDelete = (player) => {
    console.log('handleModelDelete', player);
    console.log('handleModelDelete players', this.state.players);
    const updatePlayerList = this.state.players
      .filter(p => p.id != player.id);
    console.log('updatePlayerList', updatePlayerList);
    this.setState(
      {
        players: updatePlayerList,
        selectedPlayer: null
      }
    );
  }


  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Hello />
        <PlayerInput onSave={this.addPlayer} />
        <PlayerList players={this.state.players} onSelect={this.selectPlayer}></PlayerList>

        <Modal visible={this.state.selectedPlayer != null} onRequestClose={this.handleModelClose} >

          {this.state.selectedPlayer ?
            <View style={styles.container}>
              <Image source={this.state.selectedPlayer.image} style={{ height: 50, width: 50 }}></Image>
              <Text>{this.state.selectedPlayer.playerName}</Text>
              <Button title="close" onPress={this.handleModelClose}></Button>
              <Button title="delete" onPress={() => this.handleModelDelete(this.state.selectedPlayer)}></Button>
            </View> : null}
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
