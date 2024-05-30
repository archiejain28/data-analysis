import {useMemo} from 'react';
import {minAndMaxCropProduction} from '../cropAnalysisCalculations';
import ShowTable from './ShowTable';

export default function CropProduction(){
  const columns = useMemo(
    () => [
      {
        accessorKey: 'year', //access nested data with dot notation
        header: 'Year',
      },
      {
        accessorKey: 'maxProductionCrop',
        header: 'Crop with Maximum Production in that Year',
      },
      {
        accessorKey: 'minProductionCrop', //normal accessorKey
        header: 'Crop with Minimum Production in that Year',
      },
    ],
    [],
  );
   return <>
    <ShowTable columns ={columns} row={minAndMaxCropProduction}/>
   </>
}