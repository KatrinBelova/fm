import React from "react";
import { List, ListItem, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    textTransform: "uppercase",
  },
  navList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  navItem: {
    width: "auto",
  },
}));

const menuList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Search",
    link: "/search",
  },
];

const Menu = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <List className={classes.navList}>
        {menuList.map((item, idx) => (
          <ListItem key={idx} className={classes.navItem}>
            <ListItem button component='a' href={item.link}>
              {item.name}
            </ListItem>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default Menu;
