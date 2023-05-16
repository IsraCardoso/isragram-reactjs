export {}

declare global {

  interface ButtonProps {
    type?: "button" | "submit" | "reset";
    text: string;
    onClick?: () => void;
    disabled: boolean;
    variant?: Color;
  }


}
