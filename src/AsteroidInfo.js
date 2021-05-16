import { useLocation } from "react-router-dom";
import { Box, Card, makeStyles } from "@material-ui/core";

var useStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: "5rem",
  },
  dataBox: {
    paddingBottom: "1rem",
    letterSpacing: "1.1px",
  },
  title: {
    fontSize: "18px",
    fontWeight: 700,
  },
});
const AsteroidInfo = (props) => {
  const location = useLocation();
  console.log(location.state.astData["is_potentially_hazardous_asteroid"]);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box className={classes.dataBox}>
        <span className={classes.title}>Name :</span>
        <span className={classes.data}>{location.state.astData.name}</span>
      </Box>
      <Box className={classes.dataBox}>
        <span className={classes.title}>NASA JPL URL :</span>
        <span className={classes.data}>
          {location.state.astData.nasa_jpl_url}
        </span>
      </Box>
      <Box className={classes.dataBox}>
        <span className={classes.title}>Is Pottentially Hazardeous :</span>
        <span className={classes.data}>
          {location.state.astData.is_potentially_hazardous_asteroid
            ? "true"
            : "false"}
        </span>
      </Box>
    </Card>
  );
};

export default AsteroidInfo;
