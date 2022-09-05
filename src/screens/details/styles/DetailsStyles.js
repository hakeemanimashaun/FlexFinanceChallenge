import { StyleSheet } from "react-native";
import { colors } from "../../../utils/COLORS";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  paddedContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 0.4,
    borderRadius: 10,
  },
  type: {
    fontSize: 16,
    color: colors.red,
    textAlign: "center",
  },
  author: {
    fontSize: 18,
    fontWeight: "bold",
  },
  authorContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reciever: {
    fontSize: 18,
    marginTop: 20,
    alignSelf: "flex-end",
  },
  recieverLabel: {
    fontSize: 16,
    textAlign: "center",
    color: colors.green,
  },
  titleComment: {
    marginTop: 10,
    marginBottom: 2,
    fontSize: 16,
    fontWeight: "500",
  },
  underline: {
    width: "100%",
    borderWidth: 0.3,
  },
  comment: {
    textAlign: "justify",
  },
  activityView: {
    flexDirection: "row",
  },
  status: {
    color: colors.green,
    marginLeft: 5,
    fontSize: 18,
  },
});
