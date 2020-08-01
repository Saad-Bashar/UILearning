import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function SecondWay() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/bg.jpg")}
        style={{ flex: 1 }}
      >
        <Image
          style={{ marginTop: 60, marginLeft: 20 }}
          source={require("../assets/LOGO.png")}
        />
      </ImageBackground>

      <View style={styles.bottomView}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../assets/lal.png")}
        />

        <View style={{ marginTop: 24 }}>
          <Text style={styles.title}>Non-Contact{`\n`}Deliveries</Text>
          <Text style={styles.subheader}>
            When placing an order, select the option "Contactless delivery" and
            the courier will leave your order at the door.
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.orderNow}>ORDER NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dismissBtn}>
          <Text style={styles.dismiss}>DISMISS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bottomView: {
    flex: 2,
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
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
