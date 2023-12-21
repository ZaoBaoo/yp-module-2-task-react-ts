import { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  customField: string;
};

const Input: FC<Props> = ({ onChange, value }) => {
  return <input onChange={onChange} value={value} />;
};

export { Input };
