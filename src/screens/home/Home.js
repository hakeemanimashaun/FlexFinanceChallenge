import { Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { events } from "../../../data";
import ActivityCard from "../../components/ActivityCard";
import CommentCard from "../../components/CommentCard";
import { styles } from "./styles/HomeStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../utils/COLORS";

let currentdate = new Date();
let today =
  currentdate.getFullYear() +
  "-" +
  ("0" + (currentdate.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + currentdate.getDate()).slice(-2) +
  "T" +
  ("0" + currentdate.getHours()).slice(-2) +
  ":" +
  ("0" + currentdate.getMinutes()).slice(-2) +
  ":" +
  ("0" + currentdate.getSeconds()).slice(-2);

const formatTypeString = (str) => {
  let strArray = str.split("");
  let newWordIndex = 0;
  strArray.map((str, index) => {
    if (str === str.toUpperCase() && index !== 0) {
      newWordIndex = index;
    }
  });
  let firstWord = str.slice(0, newWordIndex);
  let secondword = str.slice(newWordIndex, str.length);
  return `${
    firstWord.charAt(0).toLowerCase() + firstWord.slice(1, firstWord.length)
  } ${secondword}`;
};

const formatDate = (dateStamp) => {
  let commentDate = new Date(dateStamp);
  let todayDate = new Date(today);

  return `${Math.floor(
    (todayDate - commentDate) / (1000 * 60 * 60 * 24)
  )} days ago`;
};
const sortDescending = () => {
  let result = events.sort((a, b) => {
    let adateStamp = new Date(a.createdAt) / (1000 * 60 * 60 * 24);
    let bdateStamp = new Date(b.createdAt) / (1000 * 60 * 60 * 24);
    return bdateStamp - adateStamp;
  });
  return result;
};

const Home = ({ navigation }) => {
  let sortedEvents = sortDescending();
  let [completed, setCompleted] = useState(false);
  let [clicked, setClicked] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [hideComment, setHideComment] = useState(false);

  const handleDone = (clickedIndex) => {
    sortedEvents.map((event, index) => {
      event.done = false;
      if (clicked == clickedIndex) {
        event.done = false;
      }
      if (clickedIndex >= index) {
        event.done = !event.done;
        setCompleted(!completed);
      }
      setClicked(clickedIndex);
    });
  };
  const handleHide = (clickedIndex) => {
    sortedEvents.map((event, index) => {
      if (clickedIndex == index) {
        event.show = !event.show;
        setHideComment(!hideComment);
      }
    });
  };
  const handleAppend = () => {
    sortedEvents.map((event, index) => {
      event.append = false;

      if (
        index > 0 &&
        sortedEvents[index].author === sortedEvents[index - 1].author &&
        sortedEvents[index].type === sortedEvents[index - 1].type
      ) {
        event.append = true;
      }
    });
  };

  useEffect(() => {
    handleAppend();
  }, [completed, hideComment]);

  return (
    <View style={styles.container}>
      <View style={styles.paddedcontainer}>
        <FlatList
          data={sortedEvents}
          renderItem={(event, index) => {
            if (event.index > 6 && !showMore) return null;
            if (event.item.type === "activity") {
              return (
                <ActivityCard
                  author={event.item.author}
                  authorTitle={event.item.author.charAt(0)}
                  type={formatTypeString(event.item.activity.type)}
                  status={event.item.activity.status}
                  completed={event.item.done}
                  clickDone={() => handleDone(event.index)}
                  days={formatDate(event.item.createdAt)}
                  appendUp={event.item.append}
                  viewPress={() => navigation.navigate("Details", event)}
                />
              );
            }
            if (event.item.type === "comment") {
              return (
                <CommentCard
                  author={event.item.author}
                  authorTitle={event.item.author.charAt(0)}
                  commentTitle={event.item.message.title}
                  comment={event.item.message.description}
                  completed={event.item.done}
                  clickDone={() => handleDone(event.index)}
                  days={formatDate(event.item.createdAt)}
                  reciever={event.item.message.receiver}
                  appendUp={event.item.append}
                  viewPress={() => navigation.navigate("Details", event)}
                  hideCommentPress={() => handleHide(event.index)}
                  show={event.item.show}
                />
              );
            }
          }}
          ListFooterComponent={() => (
            <TouchableOpacity
              style={styles.buttonShowMore}
              onPress={() => setShowMore(!showMore)}
            >
              <Ionicons name="folder-open" color={colors.purple} size={20} />
              <Text style={styles.showMoreText}>
                {showMore ? "Show Less" : "Show The Rest"}
              </Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;
