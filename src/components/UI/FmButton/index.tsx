import React, { FC } from "react";
import { makeStyles, Button, ButtonProps } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    margin: "20px auto",
    fontWeight: 600,
  },
});

const FmButton: FC<ButtonProps> = ({
  children,
  variant,
  color,
  disabled,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.btn}
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default FmButton;
