type ButtonType = "submit" | "reset" | "button";

export interface IPrimaryButtonProps {
  text: string;
  type: ButtonType;
  onClick?: () => void;
}
