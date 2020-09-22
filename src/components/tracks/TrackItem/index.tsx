import React from "react";
import { Track } from "../../../models/tracksTypes";
import { makeStyles, ListItem, Theme, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    position: "relative",
    padding: "1.7em 1.5em 1.15em 78px",
    background: theme.palette?.darkBg?.main,
    color: "#fff",
    width: "100%",
    maxWidth: 300,
    margin: 30,
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "all .3s ease-in-out",
    "&:hover": {
      boxShadow: `15px 15px 0px 0px ${theme.palette?.secondary?.main}`,
    },
  },
  artist: {
    color: theme.palette?.primary?.main,
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
  },
  imgWrapper: {
    position: "absolute",
    top: "50%",
    left: -25,
    width: 50,
    height: 50,
    transform: "translate(0, -50%)",
  },
  trackImg: {
    width: "100%",
    borderRadius: "50%",
    border: `5px solid ${theme.palette?.darkBg?.main}`,
    boxShadow: `0px 0px 0px 5px ${theme.palette?.primary?.main}`,
  },
}));

const TrackItem = ({ name, mbid, image, artist }: Track) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <div className={classes.imgWrapper}>
        <img
          className={classes.trackImg}
          src={image ? image[0]?.["#text"] : ""}
          alt={name}
        />
      </div>
      {artist && (
        <>
          {typeof artist === "object" ? (
            <Link
              to={artist?.mbid ? `/artist/${artist?.mbid}` : "#"}
              className={classes.artist}
            >
              <span>{artist?.name}</span>
              <ArrowRightAltIcon />
            </Link>
          ) : (
            <Box className={classes.artist}>
              <span>{artist}</span>
            </Box>
          )}
        </>
      )}
      <p>{name}</p>
    </ListItem>
  );
};

export default TrackItem;
