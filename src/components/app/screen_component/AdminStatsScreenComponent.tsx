import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MediumSpacer, SmallSpacer } from "../../util/Spacer";
import ContributionGraphComponent from "../common/ContributionGraphComponent";
import LinearGraph from "../common/LinearGraph";
import useTr from "../../../manager/TranslationManager";
import AppColors from "../../../util/globalColors";

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
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: AppColors.white,
    elevation: 5
  },
  graphView: {
    borderRadius: 20,
    backgroundColor: AppColors.white,
    padding: 15,
    elevation: 5
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
      <View style={styles.graphView}>
        <Text style={styles.contentText}>{tr("usersForRating")}</Text>
        <SmallSpacer />
        <LinearGraph
          graphDataY={valorationsForUsers}
          graphDataX={["1", "2", "3", "4", "5"]}
        />
      </View>
      <MediumSpacer />
      <View style={styles.graphView}>
        <Text style={styles.contentText}>{tr("courseCreationDates")}</Text>
        <SmallSpacer />
        <ContributionGraphComponent data={dates} />
      </View>
    </ScrollView>
  );
}

export default AdminStatsScreenComponent;
