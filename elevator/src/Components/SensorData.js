import React, { useState, useEffect, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

//Redux
import { connect } from "react-redux";

const SensorData = (props) => {
  const classes = useStyles();

  const sensorValues = [
    {
    name: "Current Direction",
    value: props.direction
    },
    {
        name: "Next Floor",
        value: props.nextFloor
    },
    {
        name: "Current Floor",
        value: props.currentFloor
    },
    {
        name: "State",
        value: props.state
    },
    {
        name: "Current Weight",
        value: props.currentWeight.toFixed(2)
    },
    {
        name: "Max Weight",
        value: props.maxWeight.toFixed(2)
    },
    {
        name: "Door Status",
        value: props.doorStatus
    },
  ]

  return (
    <div>
        <h3>Sensor Data</h3>
        <div style={{textAlign: 'left', marginLeft: 50}}>
            {sensorValues.map((val) => (
            <p>{val.name}: {val.value}</p>
            ))}
        </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#fff",
  },
}));

function mapStateToProps(state) {
    return {
        direction: state.direction,
        nextFloor: state.nextFloor,
        currentFloor: state.currentFloor,
        state: state.state,
        currentWeight: state.currentWeight,
        maxWeight: state.maxWeight,
        doorStatus: state.doorStatus,
    };
  }
  
export default connect(mapStateToProps)(SensorData);


