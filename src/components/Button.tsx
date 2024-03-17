import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props
  extends Pick<ButtonProps, "onClick" | "children" | "className"> {
  variant: "primary" | "secondary";
}

export function Button({ variant, className, ...buttonProps }: Props) {
  return (
    <button
      {...buttonProps}
      className={["btn", variant ? styles[`btn-${variant}`] : null, className]
        .map(Boolean)
        .join(" ")}
    />
  );
}
