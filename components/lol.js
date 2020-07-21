import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const BotaoPersonage = ({ props }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Detalhes")}>
        <View style={styles.cartao}>
          <Text>{item.localized_name}</Text>
          <Text>{item.primary_attr}</Text>
          <View>
            <Text>{item.roles[0]}</Text>
            <Text>{item.roles[1]}</Text>
            <Text>{item.roles[2]}</Text>
            <Text>{item.roles[3]}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BotaoPersonage;

const styles = StyleSheet.create({
  cartao: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
