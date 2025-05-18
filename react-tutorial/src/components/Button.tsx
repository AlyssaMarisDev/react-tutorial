import { ReactNode, MouseEvent } from "react";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
  Link = "link",
}

interface ButtonProps {
  children: ReactNode;
  type?: ButtonType;
  className?: string;
  onClick?: (event: MouseEvent) => void;
  onMouseEnter?: (event: MouseEvent) => void;
  onMouseLeave?: (event: MouseEvent) => void;
  onMouseDown?: (event: MouseEvent) => void;
  onMouseUp?: (event: MouseEvent) => void;
}

const Button = ({
  children,
  type = ButtonType.Primary,
  className = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${type} ${className}`}
      onClick={onClick ? (event) => onClick(event) : undefined}
      onMouseEnter={onMouseEnter ? (event) => onMouseEnter(event) : undefined}
      onMouseLeave={onMouseLeave ? (event) => onMouseLeave(event) : undefined}
      onMouseDown={onMouseDown ? (event) => onMouseDown(event) : undefined}
      onMouseUp={onMouseUp ? (event) => onMouseUp(event) : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
