import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getHerois, getHeroi } from "./getHerois";

const FetchHerois = () => {
  const [heroiData, setHeroiData] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const urlInicial = "https://api.opendota.com/api/heroes";

  useEffect(() => {
    async function fetchData() {
      let reposta = await getHerois(urlInicial);
    }
    console.log(resposta);
  });

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default FetchHerois;

const styles = StyleSheet.create({});
