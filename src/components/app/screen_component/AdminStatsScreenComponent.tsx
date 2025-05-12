import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MediumSpacer, SmallSpacer } from "../../util/Spacer";
import ContributionGraphComponent from "../common/ContributionGraphComponent";
import LinearGraph from "../common/LinearGraph";
import useTr from "../../../manager/TranslationManager";

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  totalView: {
    alignSelf: "stretch",
    justifyContent: "center",
    paddingVertical: 10,
    flexDirection: "row",
    borderColor: "#a84444",
    borderBottomWidth: 2,
  },
  totalText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  contentText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

type AdminStatsProps = {
  totalInscriptions: number;
  valorationsForUsers: number[];
  dates: { count: number; date: string }[];
};

function AdminStatsScreenComponent({
  totalInscriptions,
  valorationsForUsers,
  dates,
}: Readonly<AdminStatsProps>) {
  const tr = useTr();
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <SmallSpacer />
      <View style={styles.totalView}>
        <Text style={styles.totalText}>{tr("totalInscriptionsText")}</Text>
        <Text style={styles.totalText}>{totalInscriptions}</Text>
      </View>
      <MediumSpacer />
      <Text style={styles.contentText}>{tr("usersForRating")}</Text>
      <SmallSpacer />
      <LinearGraph
        graphDataY={valorationsForUsers}
        graphDataX={["1", "2", "3", "4", "5"]}
      />
      <MediumSpacer />
      <Text style={styles.contentText}>{tr("courseCreationDates")}</Text>
      <SmallSpacer />
      <ContributionGraphComponent data={dates} />
    </ScrollView>
  );
}

export default AdminStatsScreenComponent;
