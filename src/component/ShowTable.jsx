import React from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';


const ShowTable= ({columns, row}) => {
  const table = useMantineReactTable({  
    columns,
    data:row
  });

  return <MantineReactTable table={table} />;
}

export default ShowTable