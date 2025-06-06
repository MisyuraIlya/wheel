import { Direction } from "@/types";
import { DirectionEnum } from "./direction";

export const getDirection = (locale: string): Direction => {
  return 'he' === locale ? DirectionEnum.rtl : DirectionEnum.ltr;
};