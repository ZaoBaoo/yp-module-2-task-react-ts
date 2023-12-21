import { ButtonHTMLAttributes, FC } from "react";

type OwnProps = ButtonHTMLAttributes<HTMLButtonElement>;
type Props = OwnProps;

const Button: FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export { Button };
