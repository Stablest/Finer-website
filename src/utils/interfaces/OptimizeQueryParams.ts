export enum OptimizeQueryParams {
  TYPE = "type",
  WIDTH = "width",
  HEIGHT = "height",
  QUALITY = "quality",
  FIT = "fit",
}

export interface IOptimizeQueryParams {
  type: string;
  width: number | undefined;
  height: number | undefined;
  quality: number | undefined;
  fit: string;
}
