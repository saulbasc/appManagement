/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import AppColors from "../../../util/globalColors";
import useTr from "../../../manager/TranslationManager";

const screenWidth = Dimensions.get("window").width - 50;

const styles = StyleSheet.create({
  view: {
    borderRadius: 20,
  },
});

function LinearGraph({ graphDataX, graphDataY }: any) {
  const tr = useTr();

  const chartConfig = {
    backgroundGradientFrom: AppColors.white,
    backgroundGradientTo: AppColors.white,
    color: () => AppColors.primary,
    labelColor: () => AppColors.black,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: true,
  };

  const data = {
    labels: graphDataX,
    datasets: [
      {
        data: graphDataY,
        color: () => AppColors.primary,
        strokeWidth: 3,
      },
    ],
    legend: [""],
  };

  return (
    <View>
      <LineChart
        style={styles.view}
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        xAxisLabel="⭐"
        yAxisSuffix={tr('user')}
        formatYLabel={(yValue) => parseInt(yValue, 10).toString()}
        withDots={false}
        withHorizontalLines={false}
        withVerticalLines={false}
      />
    </View>
  );
}

export default LinearGraph;
