import React from "react";
import { makeStyles } from "@material-ui/core";
import bgImage from "../../images/header-bg.jpg";
import Menu from "../Menu";

type Props = {
  title?: string;
};

const useStyles = makeStyles({
  header: {
    minHeight: 300,
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "bottom center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
});

const Header = ({ title = "Don’t Miss New Hits" }: Props) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Menu />
      <p className={classes.title}>{title}</p>
    </header>
  );
};

export default Header;
