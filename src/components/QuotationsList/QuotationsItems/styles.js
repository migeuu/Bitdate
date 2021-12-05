import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContent: {
    width: "100%",
    height: "auto",
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  contextLeft: {
    width: "30%",
    alignItems: "flex-start",
  },
  logoDayCotation: {
    flexDirection: "row",
    alignItems: "center",
  },
  dayCotation: {
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: "bold",
    color: "#ffffe6",
  },
  contextRight: {
    width: "60%",
    alignItems: "flex-end",
  },
  priceCotation: {
    color: "#ffffe6",
    fontWeight: "bold",
    fontSize: 18,
  },
});
