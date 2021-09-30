import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

//Material UI
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import IconButton from '@mui/material/IconButton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

//Components
import UseMedia from "./UseMedia";

//Redux
import { connect } from "react-redux";

const ElevatorButtons = (props) => {

    const classes = useStyles();
    const floors = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];
    var test = props;
    const mobile = UseMedia("(min-width: 474px)");
    var callStackNew = test.callStack;
    const [counter, setCounter] = useState(0);
    const [direction, setDirection] = useState('');
    const [floor, setFloor] = useState('');
    const [id, setId] = useState('0U');
    const [stack, setStack] = useState([]);
    
    //handles move
    const move = () => {
        const movePromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                props.dispatch({ type: "POP_CALLSTACK" }); 
                resolve(callStackNew);
            }, 3000);
        });

        movePromise
        .then((value) => console.log('value: 1', value))
        .then(() => {
            //await stopped();
            console.log('stopped')
        }, 5000)
        .then(() => console.log('3'))
        .then(() => {
        const newStack = callStackNew.length > 1 ? callStackNew.shift() : [];
        handleNext(newStack)
        })
        .catch(() => console.log('failed'));
    }

    //Sets the next id so next gets triggered
    async function handleNext() {
        setCounter(counter + 1);
    }

    //Pushes floor when buttons have been pressed
    useEffect(() => {
        if (floor && direction) {
        pushFloor();
        setFloor('');
        setDirection('');
        }
    })

    //Calls move() when the id has changed (meaning new currentStack)
    useEffect(() => {
        console.log('move effect')
        move();
    }, [id])

    //Changes Id which will trigger useEffect() which will trigger move()
    useEffect(() => {
        if (callStackNew.length > 0) {
            setId(callStackNew[0].id);
            props.dispatch({ type: "UPDATE_SENSOR_DATA", payload: callStackNew[0] });
        }
    }, [counter])

    //calls sorting method
    async function sortStack() {
        await props.dispatch({ type: "SORT_STACK" });
    }

    //handles floor pushing
    async function pushFloor(){

    const dataStack = {
        floor: floor,
        direction: direction,
        weight: 155.00,
        elState: 'Moving',
        id: JSON.stringify(floor + direction)
    }

    if (callStackNew.length === 0) {
        console.log('change id')
        await props.dispatch({ type: "UPDATE_SENSOR_DATA", payload: dataStack });
        setId(dataStack.id);
    }

    setStack([...stack, dataStack]);
    await props.dispatch({ type: "PUSH_CALLSTACK", payload: dataStack });
    }

    //sets direction button
    const directionButton = (_direction) => {
        if (_direction === direction) {
        setDirection("");
        return;
        }
    setDirection(_direction);
    }

    //sets floor button
    const floorButton = (_floor) => {
    if (_floor === floor) {
        setFloor("");
        return;
        }
    setFloor(_floor);
    }

  return (
      <div>
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        {mobile ? (
        <div className={classes.exceededWeight} style={{backgroundColor: props.disabled ? 'red' : 'green'}}>
            <p>Weight Status: OK</p>
        </div>
        ) : null}
        <div className={classes.upDownButtons}>
            <IconButton onClick={() => directionButton('Up')} disabled={props.disabled}>
                <ArrowCircleUpIcon style={{fontSize: 40, color: direction === 'Up' ? 'green' : 'black'}}/>
            </IconButton>
            <IconButton onClick={() => directionButton('Down')} disabled={props.disabled}>
                <ArrowCircleDownIcon style={{fontSize: 40, color: direction === 'Down' ? 'green' : 'black'}}/>
            </IconButton>
        </div>
        <div className={classes.numberButtons}>
            {floors.map(_floor => (
                <IconButton onClick={() => floorButton(_floor)} disabled={props.disabled}>
                    <CircleOutlinedIcon style={{fontSize: 40, color: floor === _floor ? 'green' : 'black'}}/>
                    <div style={{position: 'absolute', left: 22, top: 18}}>
                        <p style={{padding: 0, margin: 0, fontSize: 20, color: floor === _floor ? 'green' : 'black'}}>{_floor}</p>
                    </div>
                </IconButton> 
            ))}
        </div>
    </div>
    {mobile ? null : (
        <div className={classes.exceededWeight} style={{backgroundColor: props.disabled ? 'red' : 'green', margin: 'auto'}}>
            <p>Weight Status: OK</p>
        </div>
    )}
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



