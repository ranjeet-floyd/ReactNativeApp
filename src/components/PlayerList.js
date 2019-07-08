import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight } from 'react-native';
const PlayerList = (props) => {

    function onItemPress(player) {
        console.log("On  Item Pressed : " + player);
        props.onSelect(player);
    }

    function generateList() {
        return props.players.map((p) => {
            console.log(p);
            return (
                // <TouchableHighlight key={p.id.toString()} onPress={() => onItemPress(p)}>
                <TouchableHighlight key={p.id.toString()} onPress={onItemPress.bind(this, p)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={p.image} style={{ height: 55, width: 55, margin: 5 }}></Image>
                        <Text>{p.playerName}</Text>
                    </View>
                </TouchableHighlight>
            );
        });
    }

    return (

        <View style={{ width: "100%" }}>
            <Text style={{ color: 'red', fontSize: 20 }}>List of Players</Text>
            <ScrollView>
                {props.players.length > 0 ? generateList() : <Text>No Players</Text>}
            </ScrollView>
        </View>

    );
}

export default PlayerList;