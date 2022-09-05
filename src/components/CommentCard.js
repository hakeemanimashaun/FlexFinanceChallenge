import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../utils/COLORS";

const CommentCard = ({
  commentTitle,
  days,
  authorTitle,
  author,
  clickDone,
  comment,
  completed,
  reciever,
  appendUp,
  viewPress,
  show,
  hideCommentPress,
}) => {
  return (
    <>
      {appendUp ? null : <View style={styles.seperator} />}
      <TouchableOpacity style={styles.card} onPress={viewPress}>
        <View style={appendUp ? styles.innerCardAppend : styles.innerCard}>
          {appendUp ? null : (
            <>
              <TouchableOpacity style={styles.checkCircle} onPress={clickDone}>
                {completed ? (
                  <Ionicons
                    name="md-checkmark"
                    size={14}
                    color={colors.green}
                  />
                ) : null}
              </TouchableOpacity>
              <View style={styles.labelCircle}>
                <Text style={styles.labelText}>{authorTitle}</Text>
              </View>
              <Text style={styles.eventText}>{author}</Text>
            </>
          )}
        </View>
        <View style={styles.commentCard}>
          <View style={styles.commentTitleView}>
            <Text style={styles.commentTitle}>{commentTitle}</Text>
            <TouchableOpacity
              style={{
                marginRight: 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={hideCommentPress}
            >
              <Ionicons
                name={show ? "eye-off" : "eye"}
                size={20}
                color={colors.green}
              />
              <Text>{!show ? "hide" : "show"}</Text>
            </TouchableOpacity>
          </View>
          {!show ? (
            <>
              <View style={styles.commentDetails}>
                <Ionicons name="person-circle" size={15} color={colors.grey} />
                <Text style={styles.recieverText}>{reciever}</Text>
                <Text style={styles.days}>{days}</Text>
              </View>
              <Text style={styles.commentparagraph}>{comment}</Text>
            </>
          ) : null}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  card: { marginBottom: 10 },
  innerCard: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  commentTitle: { fontSize: 14 },
  innerCardAppend: {},
  checkCircle: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
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
  labelText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.white,
  },
  eventText: {
    fontSize: 12,
    fontWeight: "600",
  },
  days: {
    textAlign: "flex-start",
    fontSize: 10,
    marginLeft: 10,
  },
  commentDetails: {
    flexDirection: "row",
    marginTop: 7,
    alignItems: "center",
    width: "100%",
  },
  seperator: {
    width: "97%",
    borderWidth: 0.4,
    alignSelf: "center",
    opacity: 0.3,
  },
  recieverText: {
    marginLeft: 10,
    fontSize: 12,
  },
  commentCard: {
    borderWidth: 0.2,
    borderRadius: 10,
    width: "86%",
    alignSelf: "center",
    padding: 10,
  },
  commentparagraph: {
    textAlign: "justify",
    marginTop: 5,
    fontSize: 12,
  },
  commentTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
