import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import FirstWay from "./src/FirstWay";
import SecondWay from "./src/SecondWay";

export default function App() {
  return <SecondWay />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    height: "70%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#2D0C57",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.41,
  },

  button: {
    marginHorizontal: 20,
    marginTop: 40,
    height: 56,
    backgroundColor: "#0BCE83",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  orderNow: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 18,
  },

  dismissBtn: {
    marginHorizontal: 20,
    marginTop: 10,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },

  dismiss: {
    color: "#9586A8",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 18,
  },

  subheader: {
    marginTop: 25,
    color: "#9586A8",
    textAlign: "center",
    paddingHorizontal: 25,
    letterSpacing: -0.41,
    fontSize: 17,
  },
});
