import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const ATTR_COLORS = {
  str: "#bd1408",
  agi: "#21bf0f",
  int: "#12badb",
};

const ListaHerois = ({ navigation }) => {
  const [personagens, setPersonagens] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://api.opendota.com/api/heroStats");
    const data = await response.json();
    setPersonagens(data);

    // console.log(personagens);
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 25, padding: 10, marginVertical: 10 }}>
        Lista de herois
      </Text>
      <FlatList
        windowSize={5}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        data={personagens}
        datinha
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Detalhes", {
                  personagemId: item.id,
                  personagemName: item.localized_name,
                  personagemIcon: item.icon,
                  personagemAttr: item.primary_attr,
                  personagemIcon: item.icon,
                  personagemImg: item.img,
                  personagemAttack: item.attack_type,
                  personagemRoles: item.roles,
                  personagemBaseStr: item.base_str,
                  personagemBaseAgi: item.base_agi,
                  personagemBaseInt: item.base_int,
                  personagemGainStr: item.str_gain,
                  personagemGainAgi: item.agi_gain,
                  personagemGainInt: item.int_gain,
                  personagemMoveSpeed: item.move_speed,
                  personagemBaseMr: item.base_mr,
                  personagemAttackRange: item.attack_range,
                })
              }
            >
              <View style={styles.cartao}>
                {/* Nome e ataque*/}
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{ height: 75, width: 120 }}
                    source={{ uri: `https://api.opendota.com${item.img}` }}
                  />

                  <View style={{ marginLeft: 25 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {item.localized_name}
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={[
                          styles.badgeAttr,
                          { backgroundColor: ATTR_COLORS[item.primary_attr] },
                        ]}
                      />
                      <Text style={{ marginLeft: 5 }}>{item.attack_type}</Text>
                    </View>
                  </View>
                </View>

                {/* Roles */}
                <View style={styles.roles}>
                  <Text style={{ paddingHorizontal: 10 }}>{item.roles[0]}</Text>
                  <Text style={{ paddingHorizontal: 10 }}>{item.roles[1]}</Text>
                </View>

                {/* Cenário pro */}
                <View style={styles.profissional}>
                  <View>
                    <Text style={{ fontSize: 14, marginLeft: -5 }}>
                      Picks/Bans:
                    </Text>
                    <Text style={{ fontSize: 12, marginLeft: 5 }}>
                      {item.pro_pick} / {item.pro_ban}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ alignSelf: "center" }}>
                      Vitórias: {item.pro_win}
                    </Text>
                    <Text style={{ alignSelf: "center" }}>
                      Win rate:{" "}
                      <Text>
                        {parseFloat(
                          (item.pro_win / item.pro_pick) * 100
                        ).toFixed(2)}
                        %
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListaHerois;

const styles = StyleSheet.create({
  cartao: {
    borderWidth: 1,
    borderColor: "#c4c3be",
    height: 150,
    padding: 10,
  },
  roles: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 105,
    alignItems: "center",
  },
  profissional: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: -10,
  },
  badgeAttr: {
    width: 10,
    height: 10,
    borderRadius: 50,
  },
});
