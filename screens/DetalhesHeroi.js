import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DataTable } from "react-native-paper";

const DetalhesHeroi = ({ route, navigation }) => {
  const {
    personagemName,
    personagemAttr,
    personagemIcon,
    personagemAttack,
    personagemRoles,
    personagemBaseStr,
    personagemBaseAgi,
    personagemBaseInt,
    personagemGainStr,
    personagemGainAgi,
    personagemGainInt,
    personagemAttackRange,
    personagemMoveSpeed,
    personagemBaseMr,
  } = route.params;

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 25, padding: 10, marginVertical: 10 }}>
        Detalhes do heroi
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 35, width: 35 }}
          source={{ uri: `https://api.opendota.com${personagemIcon}` }}
        />
        <Text style={{ fontSize: 25, padding: 10, marginVertical: 10 }}>
          {personagemName}
        </Text>
      </View>

      <View>
        <DataTable style={{ width: 350 }}>
          <DataTable.Header>
            <DataTable.Title></DataTable.Title>
            <DataTable.Title numeric>Base Str</DataTable.Title>
            <DataTable.Title numeric>Base Agi</DataTable.Title>
            <DataTable.Title numeric>Base Int</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Level 0</DataTable.Cell>
            <DataTable.Cell numeric>
              {personagemBaseStr} + {personagemGainStr}
            </DataTable.Cell>
            <DataTable.Cell numeric>
              {personagemBaseAgi} + {personagemGainAgi}
            </DataTable.Cell>
            <DataTable.Cell numeric>
              {personagemBaseInt} + {personagemGainInt}
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Header>
            <DataTable.Title></DataTable.Title>
            <DataTable.Title numeric>M. Resistance</DataTable.Title>
            <DataTable.Title numeric>MS</DataTable.Title>
            <DataTable.Title numeric>Attack Range</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>Attributes</DataTable.Cell>
            <DataTable.Cell numeric>{personagemBaseMr}%</DataTable.Cell>
            <DataTable.Cell numeric>{personagemMoveSpeed}</DataTable.Cell>
            <DataTable.Cell numeric>{personagemAttackRange}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </View>
  );
};

export default DetalhesHeroi;

const styles = StyleSheet.create({});
