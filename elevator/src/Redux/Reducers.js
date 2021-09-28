const sensor = {
    direction: 'NA',
    nextFloor: 'NA',
    currentFloor: '1',
    state: 'Stopped',
    currentWeight: 0.00,
    maxWeight: 600.00,
    doorStatus: 'Closed',
    callStack: []
};

function Reducer(state = sensor, action) {
    switch (action.type) {
        case "CALL_FLOOR":
            return {
                ...state,
                direction: action.payload.direction,
                callStack: [...state.callStack, action.payload.requestedFloor],
            };
        case "CHANGE_DIRECTION":
            return {
                ...state,
                direction: action.payload.direction,
            };
        default:
            return state;
    }
}

export default Reducer;