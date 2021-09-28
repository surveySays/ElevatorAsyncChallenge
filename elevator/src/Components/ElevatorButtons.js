import React, { useState, useEffect, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

//Material UI
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import IconButton from '@mui/material/IconButton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

//Redux
import { connect } from "react-redux";

const ElevatorButtons = (props) => {
  const classes = useStyles();

  const floors = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];

  const [direction, setDirection] = useState('');
  const [floor, setFloor] = useState('');

  function moving(){
    console.log('moving started');

    setTimeout(
        function () {
            console.log('moving ended');

            stopped();

            if (props.callStack.length > 0) {
                const stopData = {
                    direction: props.callStack[0].direction,
                    elState: 'Moving',
                    nextFloor: props.callStack[0].floor,
                    doorStatus: 'Closed',
                }
                    props.dispatch({ type: "SET_CURRENT_STOP", payload: stopData });
            }

        }.bind(this),
        3000
      );  
  }

  function stopped(){
    console.log('stopped started');

    setTimeout(
        function () {
            console.log('stopped ended');
            if (props.callStack.length > 0) {
                props.dispatch({ type: "POP_CALLSTACK" });   
            }
        }.bind(this),
        1000
      ); 
  }

  useEffect(() => {
    if (props.elState == 'Stopped' && props.callStack.length > 0) {
        stopped(); 
    } else if (props.elState == 'Moving' && props.callStack.length > 0) {
        moving();
    } else {
        return;
    }
})

  useEffect(() => {
      if (floor && direction) {

        const dataStack = {
            floor: floor,
            direction: direction,
            weight: 155.00
        }

        props.dispatch({ type: "PUSH_CALLSTACK", payload: dataStack });

        setFloor('');
        setDirection('');
      }
  })


  const directionButton = (_direction) => {
      if (_direction == direction) {
        setDirection("");
        return;
      }

    setDirection(_direction);
  }

  const floorButton = (_floor) => {
    if (_floor == floor) {
        setFloor("");
        return;
      }

    setFloor(_floor);
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <div className={classes.exceededWeight}>
            <p>Weight Status: OK</p>
        </div>
        <div className={classes.upDownButtons}>
            <IconButton onClick={() => directionButton('Up')}>
                <ArrowCircleUpIcon style={{fontSize: 40, color: direction == 'Up' ? 'green' : 'black'}}/>
            </IconButton>
            <IconButton onClick={() => directionButton('Down')}>
                <ArrowCircleDownIcon style={{fontSize: 40, color: direction == 'Down' ? 'green' : 'black'}}/>
            </IconButton>
        </div>
        <div className={classes.numberButtons}>
            {floors.map(_floor => (
                <IconButton onClick={() => floorButton(_floor)}>
                    <CircleOutlinedIcon style={{fontSize: 40, color: floor == _floor ? 'green' : 'black'}}/>
                    <div style={{position: 'absolute', left: 22, top: 18}}>
                        <p style={{padding: 0, margin: 0, fontSize: 20, color: floor == _floor ? 'green' : 'black'}}>{_floor}</p>
                    </div>
                </IconButton> 
            ))}
        </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
    exceededWeight: {
    width: 150,
    height: 50,
    borderRadius: 10,
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    },
    upDownButtons: {
    display: 'flex',
    flexDirection: 'column'
    },
    numberButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    maxWidth: 200
    },
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ElevatorButtons);



