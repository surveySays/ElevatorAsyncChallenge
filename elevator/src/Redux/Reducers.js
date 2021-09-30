const sensor = {
    direction: 'NA',
    currentFloor: '1',
    elState: 'Stopped',
    currentWeight: 0.00,
    maxWeight: 600.00,
    callStack: [],
    currentFloorId: '0'
};

function popArray(callStack){
    if (callStack.length <= 1) {
        return []
    } else {
        callStack.shift();
        return callStack;
    }
}

function sortNext(callStack){

    if (callStack[0].direction == "Down") {
        callStack.sort(function(a, b) {
            return a.direction - b.direction;
          });
    } else {
        callStack.sort(function(a, b) {
            return b.direction - a.direction;
          });
    }

    console.log('callStack after:', callStack);

    return callStack;
}

function Reducer(state = sensor, action) {
    switch (action.type) {
        case "PUSH_CALLSTACK":
            return {
                ...state,
                currentWeight: state.currentWeight + action.payload.weight,
                callStack: [...state.callStack, action.payload],
            };
        case "POP_CALLSTACK":
            return {
                ...state,
                currentWeight: state.callStack.length > 0 ? (state.currentWeight - 155.00) : 0.00,
                callStack: popArray([...state.callStack]),
            };
        case "SORT_STACK":
            return {
                ...state,
                callStack: sortNext([...state.callStack]),
            };
        case "UPDATE_SENSOR_DATA":
            return {
                ...state,
                direction: action.payload.direction,
                currentFloor: action.payload.floor,
                elState: action.payload.elState,
            };
        default:
            return state;
    }
}

export default Reducer;