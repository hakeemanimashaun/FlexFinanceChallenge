import { StyleSheet } from "react-native";
import { colors } from "../../../utils/COLORS";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  paddedcontainer: {
    borderWidth: 0.2,
    borderRadius: 20,
    shadowColor: "#F0F0F0",
    width: "100%",
  },

  buttonShowMore: {
    alignSelf: "flex-start",
    margin: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
  },
  showMoreText: {
    color: colors.purple,
    fontSize: 17,
    marginLeft: 10,
  },
});
