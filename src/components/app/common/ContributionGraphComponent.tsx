/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Dimensions } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";
import AppColors from "../../../util/globalColors";

function ContributionGraphComponent({ data }: any) {
  const chartConfig = {
    backgroundColor: AppColors.white,
    backgroundGradientFrom: AppColors.white,
    backgroundGradientTo: AppColors.white,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <ContributionGraph
      values={data}
      endDate={new Date()}
      numDays={105}
      width={Dimensions.get("window").width - 50}
      height={220}
      chartConfig={chartConfig}
      tooltipDataAttrs={() => ({})}
      onDayPress={() => {}}
    />
  );
}

export default ContributionGraphComponent;
