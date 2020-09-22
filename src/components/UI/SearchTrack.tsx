import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { searchTrackAction } from "../../redux/actions/searchTrackActions";

type Props = {
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

const SearchTrack = ({ setIsSearch }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let query = event.target.value.trim();

    if (query.length > 3) {
      setIsSearch(true);
      dispatch(searchTrackAction(query));
    }
  };

  return (
    <>
      <Paper component='form' className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder='Search Track'
          inputProps={{ "aria-label": "search track" }}
          onChange={handleChange}
        />
        <IconButton
          type='submit'
          className={classes.iconButton}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchTrack;
