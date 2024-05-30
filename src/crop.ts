export type YieldData = {
    CropName:string;
    averageOfYieldOfTheCrop:string;
    averageOfCultivationAreaOfTheCrop:string;
  }

export type CropData = {
    year:string;
    maxProductionCrop:string;
    minProductionCrop:string;
  }

export type combine = CropData | YieldData