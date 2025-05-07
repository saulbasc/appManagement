/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Dimensions } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';
import AppColors from '../../../util/globalColors';

function ContributionGraphComponent({ data }: any) {
  const chartConfig = {
    backgroundColor: AppColors.primary,
    backgroundGradientFrom: AppColors.primary,
    backgroundGradientTo: AppColors.primary,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <ContributionGraph
      values={data}
      endDate={new Date()}
      numDays={105}
      width={Dimensions.get('window').width - 20}
      height={220}
      chartConfig={chartConfig}
      tooltipDataAttrs={() => ({})}
      onDayPress={() => {}}
    />
  );
}

export default ContributionGraphComponent;
