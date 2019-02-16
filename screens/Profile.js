import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { PricingCard } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'DoctorPage',
    headerLeft: null, // <<<back arrow>>>>
    gesturesEnabled: false, // <<Swiping>>
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#c60512',
      borderBottomColor: '#c60512',
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      fontSize: 24,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header} />
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />
          <View style={styles.body}>
            <Text style={styles.name}>Mohanad</Text>

            <Text style={styles.description}>Dentist</Text>
            <Text style={styles.description}>description</Text>

            <Card title="Education">
              <Text style={{ marginBottom: 10 }}>edu</Text>
            </Card>

            <Card title="clinic">
              <Text style={{ marginBottom: 10 }}>clinic info</Text>
            </Card>

            <Card title="contact">
              <Text style={{ marginBottom: 10 }}>499439244224</Text>
            </Card>


            {/* <Rating
  showRating
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/> */}


            {/* <Rating
               showRating
              onFinishRating={this.ratingCompleted}
             style={{ paddingVertical: 10 }}
           />

            <PricingCard
              color="#c60512"
              title="price:"
              titleStyle={{ fontSize: 25 }}
              price="$100"
             button={{ title: 'book now' }}
            />  */}

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#c60512',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
  },
  body: {
    marginTop: 40,
  },
  description: {
    fontSize: 16,
    color: '#c60512',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
