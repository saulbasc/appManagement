/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import AppColors from "../../../util/globalColors";

const screenWidth = Dimensions.get("window").width - 50;

const styles = StyleSheet.create({
  view: {
    borderRadius: 20,
  },
});

function LinearGraph({ graphDataX, graphDataY }: any) {
  const chartConfig = {
    backgroundGradientFrom: AppColors.primary,
    backgroundGradientTo: AppColors.light,
    color: () => AppColors.primary,
    labelColor: () => AppColors.white,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: true,
  };

  const data = {
    labels: graphDataX,
    datasets: [
      {
        data: graphDataY,
        color: () => "white",
        strokeWidth: 2,
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
        yAxisLabel="👤"
        formatYLabel={(yValue) => parseInt(yValue, 10).toString()}
        withDots={false}
        withHorizontalLines={false}
        withVerticalLines={false}
      />
    </View>
  );
}

export default LinearGraph;
