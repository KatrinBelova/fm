import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracksAction } from "../../redux/actions/tracksActions";
import { RootState } from "../../redux/reducers";
import TrackList from "../../components/tracks/TrackList";
import Header from "../../components/Header";
import { Container } from "@material-ui/core";

const Home = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(
    (state: RootState) => state?.tracksData?.data?.track
  );

  useEffect(() => {
    dispatch(getTracksAction(1));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <TrackList tracks={tracks} />
      </Container>
    </>
  );
};

export default Home;
