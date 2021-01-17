import IMouseEvents from "./mouse-events";

export interface IInput extends IMouseEvents {
  type: string;
  placeholder: string;
  id?: string;
}
