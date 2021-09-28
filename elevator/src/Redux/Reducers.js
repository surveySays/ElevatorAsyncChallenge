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

function Reducer(state = sensor, action) {
    switch (action.type) {
        case "CALL_FLOOR":
            return {
                ...state,
                callStack: [...state.callStack, action.payload],
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