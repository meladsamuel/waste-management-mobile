import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 3,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 32,
  },
});

const Login = () => {
  const handlePress = () => null;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="username"
        placeholderTextColor="#333"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="#333"
        secureTextEntry
      />
      <Button title="Login" onPress={handlePress} />
    </View>
  );
};

export default Login;
