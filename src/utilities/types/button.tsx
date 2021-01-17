import IMouseEvents from "./mouse-events";

export interface IButton extends IMouseEvents {
  id?: string;
  children?: React.ReactNode;
}
