import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  /* Defining the main root component of the app. */
  const [digit1, digitChange] = useState(0);
  /* Creating a state variable 'digit1' and a function called 'digitChange', which can be used to update  digit1. The initial value of digit1 is set to 0. */

  /* Creating a function which takes the argument 'whattodo', which is a string- plus or minus. */
  function digitcounter(whattodo) {
    if (whattodo === "plus") {
      /* Incrementing the digit */
      if (digit1 < 10) {
        /* Checking the digit is below 10, so that the user cannot increase the digit above 10. */
        digitChange(digit1 + 1);
      }
    } else if (whattodo === "minus") {
      /* Decrementing the digit */
      if (digit1 > 0) {
        /* Checking the digit is above 0, so that the user cannot decrease the digit below 0. */
        digitChange(digit1 - 1);
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonOver}>
        <TouchableOpacity
          style={styles.firstButton}
          onPress={() => {
            /* Calling the "plus" argument of the digitcounter function. */
            digitcounter("plus");
          }}
        >
          <Text style={styles.buttonText}>Plus</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.middleDigit}>{digit1}</Text>
      <View style={styles.buttonUnder}>
        <TouchableOpacity
          style={styles.secondButton}
          onPress={() => {
            /* Calling the "minus" argument of the digitcounter function. */
            digitcounter("minus");
          }}
        >
          <Text style={styles.buttonText}>Minus</Text>
        </TouchableOpacity>
      </View>
      <View styles={styles.buttonBottom}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => {
            /* Directly setting digit1 to 0 upon pressing the 'reset' button. */
            digitChange(0);
          }}
          value={digit1}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5dc9c2",
  },

  firstButton: {
    borderWidth: 1,
    height: 70,
    width: 100,
    borderRadius: 20,
    backgroundColor: "#feffb3",
  },

  secondButton: {
    borderWidth: 1,
    height: 70,
    width: 100,
    borderRadius: 20,
    backgroundColor: "#feffb3",
  },

  buttonText: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 25,
  },

  middleDigit: {
    fontSize: 70,
  },

  bottomButton: {
    borderWidth: 1,
    height: 70,
    width: 100,
    borderRadius: 20,
    backgroundColor: "#feffb3",
    top: 300,
  },
});
