import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../utils/COLORS";

const ActivityCard = ({
  authorTitle,
  author,
  type,
  status,
  completed,
  clickDone,
  days,
  appendUp,
  viewPress,
}) => {
  return (
    <>
      {appendUp ? null : <View style={styles.seperator} />}
      <TouchableOpacity style={styles.card} onPress={viewPress}>
        <View style={appendUp ? styles.innerCardAppend : styles.innerCard}>
          {appendUp ? (
            <View style={styles.emptyView} />
          ) : (
            <>
              <TouchableOpacity style={styles.checkCircle} onPress={clickDone}>
                {completed ? (
                  <Ionicons name="md-checkmark" size={14} color="green" />
                ) : null}
              </TouchableOpacity>
              <View style={styles.labelCircle}>
                <Text style={styles.labelText}>{authorTitle}</Text>
              </View>
            </>
          )}
          <Text style={styles.eventText}>{author} </Text>
          <Text style={styles.eventDescription}>
            has {type} to
            <View style={styles.redDot} /> {status}
          </Text>
        </View>
        <Text style={styles.days}>{days}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerCard: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  emptyView: {
    width: 48,
  },
  innerCardAppend: {
    marginTop: -10,
    flexDirection: "row",
    alignItems: "center",
  },
  checkCircle: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  labelCircle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purple,
    marginHorizontal: 5,
  },
  seperator: {
    width: "97%",
    borderWidth: 0.4,
    alignSelf: "center",
    opacity: 0.3,
  },
  labelText: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.white,
  },
  eventDescription: {
    fontSize: 10,
  },
  eventText: {
    fontSize: 12,
    fontWeight: "600",
  },
  redDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.red,
  },
  days: {
    marginRight: 20,
    textAlign: "right",
    fontSize: 8,
  },
});
