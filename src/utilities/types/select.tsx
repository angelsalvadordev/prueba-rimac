import IMouseEvents from "./mouse-events";

export interface IOption {
  value: string;
  name: string;
}

export interface ISelect extends IMouseEvents {
  name: string;
  className?: string;
  id?: string;
  options: IOption[];
}
