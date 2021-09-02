import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState("Pizza Translator!")
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      <Text>{ text }</Text>
      <TextInput
        style={{
          /* CSS properties but in camelCase */
          height: 40,
          width: '100%',
          paddingLeft: 8,
          borderColor: 'gray',
          borderWidth: 3
        }}
        placeholder="Type anything words and we translate to pizza language."
        onChangeText={text => {
          if (!text) { return setInputText('') }
          return setInputText(text.split(" ").map(x => '🍕').join(''))
        }}
      />
      <Text>{ inputText }</Text>
      <Button title="Change Text" onPress={ () => setText((prev) => { return prev === "Pizza?" ? "Pizza!" : "Pizza?" }) }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

