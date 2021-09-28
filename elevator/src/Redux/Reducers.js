const sensor = {
    direction: 'NA',
    nextFloor: 'NA',
    currentFloor: '1',
    elState: 'Stopped',
    currentWeight: 0.00,
    maxWeight: 600.00,
    doorStatus: 'Closed',
    callStack: []
};

function popArray(callStack){
    return callStack.shift();
}

function Reducer(state = sensor, action) {
    switch (action.type) {
        case "PUSH_CALLSTACK":
            return {
                ...state,
                callStack: [...state.callStack, action.payload],
            };
        case "POP_CALLSTACK":
            return {
                ...state,
                callStack: [...state.callStack].length <= 1 ? [] : popArray([...state.callStack]),
                direction: 'NA',
                nextFloor: 'NA',
                currentWeight: state.currentWeight - 155.00
            };
        case "SET_NEXT_FLOOR":
            return {
                ...state,
                nextFloor: action.payload.nextFloor,
            };
        case "SET_CURRENT_FLOOR":
            return {
                ...state,
                currentFloor: action.payload.currentFloor,
            };
        case "SET_CURRENT":
            return {
                ...state,
                direction: action.payload.direction,
                elState: action.payload.elState,
                currentWeight: state.currentWeight + action.payload.currentWeight,
                doorStatus: action.payload.doorStatus,
            };
        default:
            return state;
    }
}

export default Reducer;