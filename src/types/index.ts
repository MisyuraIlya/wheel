import { DirectionEnum } from "@/config/direction";
import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode
}

export interface AppProviderProps extends IChildren {
  dir: Direction;
  locale: string;
}

export type Direction = DirectionEnum;