import React, { useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  Box,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import SearchTrack from "../../components/SearchTrack";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import Spinner from "../../components/UI/Spinner/index";
import TrackList from "../../components/tracks/TrackList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchWrapper: {
      display: "flex",
      justifyContent: "center",
      background: theme.palette.primary.main,
      padding: 50,
      marginBottom: 50,
      [theme.breakpoints.down("sm")]: {
        padding: 10,
      },
    },
  })
);

const SearchPage = () => {
  const classes = useStyles();
  const [isSearch, setIsSearch] = useState(false);

  const tracks = useSelector(
    (state: RootState) => state?.searchResult?.data?.trackmatches?.track
  );
  const isLoading = useSelector(
    (state: RootState) => state?.searchResult?.isLoading
  );

  return (
    <>
      <Header title='Find your perfect match' />
      <Container>
        <Box className={classes.searchWrapper} m={3}>
          <SearchTrack setIsSearch={setIsSearch} />
        </Box>
        {isSearch && (
          <>{isLoading ? <Spinner /> : <TrackList tracks={tracks} />}</>
        )}
      </Container>
    </>
  );
};

export default SearchPage;
