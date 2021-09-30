import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
        name: "Current Floor",
        value: props.currentFloor
    },
    {
        name: "State",
        value: props.elState
    },
    {
        name: "Current Weight",
        value: props.currentWeight.toFixed(2)
    },
    {
        name: "Max Weight",
        value: props.maxWeight.toFixed(2)
    },
  ]

  return (
    <div>
        <h3>Sensor Data</h3>
        <div className={classes.senseValues}>
            {sensorValues.map((val) => (
            <p>{val.name}: {val.value}</p>
            ))}
        </div>

        <h4>Call Stack</h4>
        <div className={classes.callWindow}>
            {props.callStack && props.callStack.map((item) => (
                <div>
                  <p>Floor: {item.floor}, Direction: {item.direction}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  senseValues: {
    textAlign: "left",
    marginLeft: 50
  },
  callWindow: {
    width: '90%', 
    height: 200, 
    border: '1px solid black', 
    overflowY: 'scroll', 
    marginLeft: 'auto', 
    marginRight: 'auto'
  }
}));

function mapStateToProps(state) {
    return {
        direction: state.direction,
        nextFloor: state.nextFloor,
        currentFloor: state.currentFloor,
        elState: state.elState,
        currentWeight: state.currentWeight,
        maxWeight: state.maxWeight,
        doorStatus: state.doorStatus,
        callStack: state.callStack
    };
  }

const mapDispatchToProps = dispatch => ({
    dispatch
})
  
export default connect(mapStateToProps, mapDispatchToProps)(SensorData);
  



