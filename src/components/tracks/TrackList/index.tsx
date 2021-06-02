import React from "react";
import { Track } from "../../../models/tracksTypes";
import TrackItem from "../TrackItem";
import { makeStyles, List } from "@material-ui/core";
import FmButton from "../../UI/FmButton/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { loadMoreTracksAction } from "../../../redux/actions/tracksActions";
import Spinner from "../../UI/Spinner/index";

type Props = {
  tracks?: Track[];
};

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

const TrackList = ({ tracks }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currPage = useSelector(
    (state: RootState) => state?.tracksData?.data?.["@attr"].page
  );
  const totalPages = useSelector(
    (state: RootState) => state?.tracksData?.data?.["@attr"].totalPages
  );
  const isLoadingMore = useSelector(
    (state: RootState) => state?.tracksData?.isLoadingMore
  );
  const isLoading = useSelector(
    (state: RootState) => state?.tracksData?.isLoading
  );

  const handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void = (e) => {
    if (currPage) dispatch(loadMoreTracksAction(+currPage + 1));
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
        {tracks && tracks?.length > 0 ? (
          <List component='ul' className={classes.list}>
            {tracks?.map((item: Track, idx: number) => (
              <TrackItem
                key={`${item?.mbid}-${idx}`}
                name={item?.name}
                mbid={item?.mbid}
                artist={item?.artist}
                image={item?.image}
              />
            ))}
          </List>
        ) : (
          <p>"Ooops, Sorry! No tracks was found."</p>
        )}
        {isLoadingMore && <Spinner />}
        {tracks 
          && tracks?.length > 0 
            && currPage < totalPages && (
          <FmButton
            color='primary'
            variant='contained'
            onClick={(e) => handleClick(e)}
          >
            Load More
          </FmButton>
        )}
      </>
        
      )}
    </>
  );
};

export default TrackList;
