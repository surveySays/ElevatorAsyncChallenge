import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//Redux
import { connect } from "react-redux";

//Components
import ElevatorButtons from "../Components/ElevatorButtons";
import UseMedia from "../Components/UseMedia";
import SensorData from "../Components/SensorData";

const Home = (props) => {
  const classes = useStyles();
  const mobile = UseMedia("(min-width: 735px)");

  return (
    <div className={classes.root}>
        <div className={classes.innerRoot}>
          <h2 style={{marginBottom: 50}}>Elevator Async Challenge</h2>
          <div className={classes.stacked} style={{ flexDirection: mobile ? 'row' : 'column' }}> 
            <div className={classes.elevatorButtons}>
              <h3>Outside Elevator</h3>
                {props.currentWeight > props.maxWeight ? <ElevatorButtons disabled={true}/> : <ElevatorButtons disabled={false}/> }
              <div className={classes.dividerHoriz}></div>
              <h3>Inside Elevator</h3>
              <ElevatorButtons disabled={false}/> 
            </div>
            <div className={classes.divider}></div>
            <div className={classes.sensorData}>
              <SensorData />
            </div>
          </div>
      </div>
    </div >
  );
}

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    position: "absolute",
  },
  innerRoot: {
    textAlign: 'center',
    margin: '50px auto',
    width: "95%",
    height: 'auto',
    paddingTop: 25,
    paddingBottom: 25,
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '-1rem 0 3rem #000',
  },
  elevatorButtons: {
    textAlign: 'center',
    flexGrow: 1,
    height: '100%'
    },
  sensorData: {
    textAlign: 'center',
    flexGrow: 1,
    height: '100%'
  },
  stacked: {
    width: '100%', 
    height: '100%', 
    justifyContent: 'space-around',
    display: 'flex',
  },
  dividerVert: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#cccccc",
    marginTop: 50,
    marginBottom: 50,
  }, 
  dividerHoriz: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#cccccc",
    marginTop: 50,
    marginBottom: 50,
  }
}));

function mapStateToProps(state) {
  return {
      currentWeight: state.currentWeight,
      maxWeight: state.maxWeight,
  };
}

export default connect(mapStateToProps)(Home);


