import dataset from './India_Agro_dataset.json';

export const cropsByYear = dataset.reduce((acc,curr)=>{
    const year = curr.Year.split(',')[1]
    if(!acc[year]){
      acc[year] = []
    }
    acc[year].push(curr)
    return acc;
},{})

export const minAndMaxCropProduction = Object.keys(cropsByYear).map((year)=>{
   const maxProductionCrop = cropsByYear[year].reduce((prev,curr)=>{
       return prev['Crop Production (UOM:t(Tonnes))'] > curr['Crop Production (UOM:t(Tonnes))'] ? prev : curr
   },cropsByYear[year][0])

   const minProductionCrop = cropsByYear[year].reduce((prev,curr)=>{
    return prev['Crop Production (UOM:t(Tonnes))'] < curr['Crop Production (UOM:t(Tonnes))'] ? prev : curr
   },cropsByYear[year][0])
 
   return {year: year, maxProductionCrop: maxProductionCrop['Crop Name'], minProductionCrop: minProductionCrop['Crop Name']}
})

export const cropsByName = dataset.reduce((acc,curr)=>{
  const cropName = curr['Crop Name']
  if(!acc[cropName]){
    acc[cropName] = []
  }
  acc[cropName].push(curr)
  return acc;
},{})

export const averageCropYield = Object.keys(cropsByName).map((cropName)=>{
  const sumOfYieldOfTheCrop = cropsByName[cropName].reduce((acc,el)=>{
    acc = acc + +el['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))']
    return acc
  },0)

  const sumOfCultivationAreaOfTheCrop = cropsByName[cropName].reduce((acc,el)=>{
      acc = acc + +el['Area Under Cultivation (UOM:Ha(Hectares))']
      return acc
  },0)

  return {CropName:cropName, averageOfYieldOfTheCrop: (sumOfYieldOfTheCrop/cropsByName[cropName].length).toFixed(3), averageOfCultivationAreaOfTheCrop: (sumOfCultivationAreaOfTheCrop/cropsByName[cropName].length).toFixed(3)}
})
