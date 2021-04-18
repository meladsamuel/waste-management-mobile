import React, { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button, StyleSheet, View, Alert } from 'react-native';
import { Dimensions } from 'react-native';

const Scanner = ({ navigation }) => {
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert(data);
    navigation.navigate('Compliant');
  };
  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={{ flex: 1 }}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  View: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
export default Scanner;
