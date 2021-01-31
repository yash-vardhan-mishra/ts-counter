import { ReactNode } from "react";

interface ButtonProps {
  color: string;
  children: ReactNode;
  handleClick: () => void;
}

const CounterButton = ({ children, color, handleClick }: ButtonProps) => {
  return (
    <span
      onClick={handleClick}
      style={{
        cursor: "pointer",
        backgroundColor: color,
        margin: "20px",
        padding: "10px",
      }}
    >
      {children}
    </span>
  );
};

export default CounterButton;
