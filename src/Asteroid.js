import { useState } from "react";
import { useHistory } from "react-router";
import { Button, Card, makeStyles, TextField } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: "5rem",
  },
  idInput: {
    minWidth: "100%",
    paddingBottom: "2rem",
  },
  randBtn: {
    float: "right",
  },
});
const AsteroidForm = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();
  let asteroidId = "";
  const inputdat = (event) => {
    asteroidId = event.target.value;
    console.log(asteroidId);
    setIsDisabled(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("hi");

    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=qOaMHDQ9ynbtbpL0VZ2rZBCdbvrkcxPo2DgRNwh5`
      // `https://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=qOaMHDQ9ynbtbpL0VZ2rZBCdbvrkcxPo2DgRNwh5`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        // setAsteroidData(response);

        // history.push(`./asteroid_info/${asteroidId}`, {
        //   asteroiddata: asteroidData,
        // });
        history.push({
          pathname: `/asteroid_info/${asteroidId}`,
          state: { astData: response },
        });
      });
  };
  const randomDataHandler = () => {
    console.log("hi");

    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=qOaMHDQ9ynbtbpL0VZ2rZBCdbvrkcxPo2DgRNwh5`
      // `https://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=qOaMHDQ9ynbtbpL0VZ2rZBCdbvrkcxPo2DgRNwh5`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        // setAsteroidData(response);

        // history.push(`./asteroid_info/${asteroidId}`, {
        //   asteroiddata: asteroidData,
        // });
        history.push({
          pathname: `/asteroid_info/${asteroidId}`,
          state: { astData: response },
        });
      });
  };
  const randomHandler = () => {
    console.log("hi");

    fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        var random = Math.floor(Math.random() * 20) + 0;
        asteroidId = response.near_earth_objects[random].id;
        randomDataHandler();
      });
  };
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <form onSubmit={submitHandler}>
        <TextField
          className={classes.idInput}
          type="text"
          ref={(input) => {
            asteroidId = input;
          }}
          onChange={inputdat}
          label="Enter Asteroid ID"
          variant="outlined"
        />

        <Button
          disabled={isDisabled ? true : false}
          variant="contained"
          color="default"
        >
          Submit
        </Button>
        <Button
          onClick={randomHandler}
          variant="contained"
          color="primary"
          className={classes.randBtn}
        >
          Random Asteroide
        </Button>
      </form>
    </Card>
  );
};

export default AsteroidForm;
