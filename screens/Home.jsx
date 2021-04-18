import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Alert, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import {
  ProgressBar,
  Colors,
  Surface,
  Card,
  Title,
  Paragraph,
  Button,
} from 'react-native-paper';
import { useGet } from '../api';
import FloatButton from '../component/FloatButton';
import Carousel from 'react-native-snap-carousel';

const initial = {
  latitude: 30.156187218581376,
  longitude: 31.617778875242266,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const renderItem = ({ item, index }) => {
  return (
    <Card style={styles.card}>
      <Card.Title title={`Basket: ${item.id}`} />
      <Card.Content>
        <Paragraph>{`level: ${item.level}`}</Paragraph>
      </Card.Content>
    </Card>
  );
};
const Home = ({ navigation }) => {
  const { isPending, payload: data, error, getAll } = useGet('baskets');
  useEffect(getAll, []);
  const carousel = useRef();
  const map = useRef();
  const markers = [];
  const markerHandler = (index) => carousel.current.snapToItem(index);
  const cardHandler = (index) => {
    let { latitude, longitude } = data.baskets[index];
    map.current.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    markers[index].showCallout();
  };
  return (
    <View style={{ flex: 1 }}>
      {isPending ? (
        <ProgressBar indeterminate color={Colors.deepPurple500} />
      ) : null}
      {error &&
        Alert.alert(`error: ${error.response.status}`, error.response.data)}
      <MapView ref={map} initialRegion={initial} style={{ flex: 1 }}>
        {data &&
          data.baskets.map(({ id, level, longitude, latitude }, index) => (
            <Marker
              key={id}
              ref={(ref) => (markers[index] = ref)}
              toolbarEnabled={false}
              showsMyLocationButton={false}
              showsPointsOfInterest={false}
              showsCompass={false}
              onPress={() => markerHandler(index)}
              icon={require('../assets/basket.png')}
              coordinate={{ longitude, latitude }}
            >
              <Callout>
                <Text>basket:{id}</Text>
                <Text>level:{level}</Text>
              </Callout>
            </Marker>
          ))}
      </MapView>
      <FloatButton navigation={navigation} />
      {data && (
        <Carousel
          ref={carousel}
          data={data.baskets}
          renderItem={renderItem}
          onSnapToItem={(index) => cardHandler(index)}
          containerCustomStyle={styles.label}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={Dimensions.get('screen').width}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    position: 'absolute',
  },
  card: {
    margin: 15,
  },
});
export default Home;
