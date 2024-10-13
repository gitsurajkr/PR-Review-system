import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const PRStatusDistributionGraph = () => {
  return (
    <div className="border border-2 border-gray-200 w-full mx:auto rounded-lg shadow-lg p-3 bg-white">
      <h2 className="text-lg font-semibold text-center -mb-4">PR Status Distribution</h2>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Group A', 'Group B', 'Group C'] }]}
        series={[{ data: [4, 3, 5] }]} // Keeping only the first series
        width={270}
        height={300}
        colors={['#4caf50']} // Change to a vibrant green
      />
      <div className="flex justify-center mt-4">
        <span className="text-xs text-gray-600">Values: 4, 3, 5</span>
      </div>
    </div>
  );
}

export default PRStatusDistributionGraph;
