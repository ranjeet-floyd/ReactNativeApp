import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const PlayerInput = (props) => {
    const [name, setName] = useState("Virat");
    const [imageSource, setImageSource] = useState("");

    function handleChange(text) {
        setName(text);
    }

    function handleSave() {
        console.log(name);
        const player = {
            id: Math.random * 10,
            playerName: name,
            image: imageSource
        }
        props.onSave(player);
    }

    function handleSelectImage() {
        const options = {
            titile: "Select Player Image "
        };

        ImagePicker.showImagePicker(options, (resp) => {
            if (resp.didCancel) {
                console.log("showImagePicker Cancelled");

            }

            else if (resp.error) {
                console.log("showImagePicker error");
            }
            else {
                console.log("showImagePicker save");
                setImageSource({ uri: resp.uri });

            }
        })

    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Player Input</Text>
            <TextInput placeholder="Player name" value={name} onChangeText={handleChange(text)}></TextInput>
            <Button title="Select Image" onPress={handleSelectImage}></Button>
            <Image style={styles.image} source={imageSource}></Image>
            <Button title="Save" onPress={handleSave}></Button>
        </View>
    );
}



export default PlayerInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    image: {
        height: 50,
        width: 50
    }
});