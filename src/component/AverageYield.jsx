import {useMemo} from 'react';
import {averageCropYield} from '../cropAnalysisCalculations';
import ShowTable from './ShowTable';

export default function AverageYield(){
  const columns = useMemo(
    () => [
      {
        accessorKey: 'CropName', //access nested data with dot notation
        header: 'Crop',
      },
      {
        accessorKey: 'averageOfYieldOfTheCrop',
        header: 'Average Yield of the Crop between 1950-2020',
      },
      {
        accessorKey: 'averageOfCultivationAreaOfTheCrop', //normal accessorKey
        header: 'Average Cultivation Area of the Crop between 1950-2020',
      }
    ],
    [],
  );
   return <>
    <ShowTable columns ={columns} row={averageCropYield}/>
   </>
}