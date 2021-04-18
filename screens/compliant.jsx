import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { TextInput, Button, Switch, Paragraph } from 'react-native-paper';

const ComplaintScreen = ({ navigation }) => {
  const [isFull, setIsFull] = React.useState(false);

  const pressHandler = () => {
    Alert.alert('your message is send :)');
    navigation.navigate('Map');
  };
  return (
    <View style={styles.container}>
      <View style={styles.switch}>
        <Paragraph>Basket is full</Paragraph>
        <Switch value={isFull} onValueChange={() => setIsFull(!isFull)} />
      </View>
      <TextInput
        mode="outlined"
        multiline
        numberOfLines={5}
        label="Message"
        maxLength={255}
        placeholder={'Enter Your messsage here'}
      />
      <Button
        style={styles.button}
        icon="send"
        mode="contained"
        onPress={pressHandler}
      >
        send
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  button: {
    marginTop: 10,
  },
});
export default ComplaintScreen;
