import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.plugins.legend.position = 'right';

interface PieProps {
  labels: string[];
  dataSet: number[];
}

const PieChart: React.FC<PieProps> = ({ labels, dataSet }: PieProps) => {
  const colors = [
    '#8a56e2',
    '#5668e2',
    '#B2B2B2',
    '#68e256',
    '#e256ae',
    '#ffd700',
    '#56e289',
    '#e28956',
    '#e2cf56',
    '#56e2cf',
    '#56aee2',
    '#aee256',
  ];

  const data = {
    labels,
    datasets: [
      {
        data: dataSet,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
