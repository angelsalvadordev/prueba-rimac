import IMouseEvents from "./mouse-events";

export interface ICheckbox extends IMouseEvents {
  id?: string;
  children?: React.ReactNode;
}
