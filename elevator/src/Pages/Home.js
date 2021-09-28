import React, { useState, useEffect, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

//Material UI
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import IconButton from '@mui/material/IconButton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

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
          <div style={{display: 'flex', flexDirection: mobile ? 'row' : 'column', width: '100%', height: '100%', justifyContent: 'space-around' }}> 
          <div className={classes.elevatorButtons}>
            <h3>Outside Elevator</h3>
              {props.currentWeight > props.maxWeight ? null : <ElevatorButtons /> }
            <div
            style={{
              flexGrow: 1,
              height: 1,
              backgroundColor: "#cccccc",
              marginTop: 50,
              marginBottom: 50,
            }}
          ></div>
            <h3>Inside Elevator</h3>
            <ElevatorButtons /> 
          </div>
          <div
            style={{
              flex: '1 1 100%;',
              width: 1,
              backgroundColor: "#cccccc",
              marginLeft: 20,
              marginRight: 20,
            }}
          ></div>
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
    height: "100%",
    position: "absolute",
    backgroundColor: "#5c85ff",
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
  }
}));

function mapStateToProps(state) {
  return {
      currentWeight: state.currentWeight,
      maxWeight: state.maxWeight,
  };
}

export default connect(mapStateToProps)(Home);


