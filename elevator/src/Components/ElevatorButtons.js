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

  useEffect(() => {
      if (floor && direction) {

        const callData = {
            floor: floor,
            direction: direction,
            weight: 155.00
        }

        props.dispatch({ type: "CALL_FLOOR", payload: callData });

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

const mapDispatchToProps = dispatch => ({
    dispatch
})
  
  export default connect(null, mapDispatchToProps)(ElevatorButtons);


