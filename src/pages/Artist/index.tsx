import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArtistAction } from "../../redux/actions/artistAction";
import { RootState } from "../../redux/reducers";
import Header from "../../components/Header";
import {
  Grid,
  Box,
  makeStyles,
  Container,
  List,
  ListItem,
  Theme,
} from "@material-ui/core";

type ArtistParams = {
  id: string;
};

type ArtistProps = RouteComponentProps<ArtistParams>;

const useStyles = makeStyles((theme: Theme) => ({
  tagList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    marginTop: 20,
  },
  tagItem: {
    width: "auto",
    color: "#fff",
    background: theme.palette.secondary.main,
    padding: "5px 10px",
    borderRadius: 5,
    margin: "20px 5px",
    listStyleType: "none",
  },
  bio: {
    wordBreak: "break-word",
  },
}));

const Artist: FC<ArtistProps> = ({ match }) => {
  const id = match.params?.id;
  const classes = useStyles();
  const dispatch = useDispatch();
  const artistInfo = useSelector((state: RootState) => state?.artistData?.data);
  const { name, bio, image, tags } = artistInfo;

  useEffect(() => {
    if (id) {
      dispatch(getArtistAction(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      <Header title={name} />
      <Container maxWidth='md'>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box m={5}>
              <img src={image ? image[2]["#text"] : ""} alt={name} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <List component='ul' className={classes.tagList}>
              {tags &&
                tags?.tag?.length > 0 &&
                tags.tag.map((item, idx) => (
                  <ListItem key={idx} className={classes.tagItem}>
                    {item?.name}
                  </ListItem>
                ))}
            </List>
            <p className={classes.bio}>{bio?.summary}</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Artist;
