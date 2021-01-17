export default interface IMouseEvents {
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined;
}
