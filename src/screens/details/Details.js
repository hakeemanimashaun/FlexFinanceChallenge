import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../../utils/COLORS";
import { styles } from "./styles/DetailsStyles";

const Details = ({ route, navigation }) => {
  const event = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddedContainer}>
        {event.item.type == "comment" ? (
          <>
            <View style={styles.authorContainer}>
              <Text style={styles.author}>{event.item.author}</Text>
              <Text style={styles.type}>{event.item.type}</Text>
            </View>
            <Text style={styles.titleComment}>{event.item.message.title}</Text>
            <View style={styles.underline} />
            <Text style={styles.comment}>{event.item.message.description}</Text>
            <Text style={styles.reciever}>
              <Text style={styles.recieverLabel}>Reciever: </Text>
              {event.item.message.receiver}
            </Text>
          </>
        ) : (
          <>
            <View style={styles.authorContainer}>
              <Text style={styles.author}>{event.item.author}</Text>
              <View style={styles.activityView}>
                <Text style={styles.type}>{event.item.type}: </Text>
                <Text style={styles.status}>{event.item.activity.type}</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Details;
