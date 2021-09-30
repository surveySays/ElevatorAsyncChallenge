//NOTE*** -> These are hypothetical test. These cannot be run and are 
//methods that I would write if I were testing this program.
//I wrote out the first two if they were actually hooked up. Usually I do
//testing with C# and C++, not JS

export function TestMove() {
    const testData = [
        {
            direction: 'Up',
            floor: 5,
            id: '5Up'
        },
        {
            direction: 'Down',
            floor: 2,
            id: '2Down'
        },
        {
            direction: 'Down',
            floor: 4,
            id: '4Down'
        }
    ]

    testData = sortFunctionCall(testData);

    if (testData[0].id == '5Up' && testData[1].id == '4Down' && testData[2].id == '2Down') {
        console.log('Test Passed')
    } else {
        console.log('Test Failed')
    }
}

export function TestCheckStack() {
    const testData = [
        {
            direction: 'Up',
            floor: 5,
            id: '5Up'
        },
        {
            direction: 'Down',
            floor: 2,
            id: '2Down'
        },
        {
            direction: 'Down',
            floor: 4,
            id: '4Down'
        }
    ]

    const newData = {
        direction: 'Down',
        floor: 1,
        id: '1Down'
    };

    testData.push(newData);

    if (sensorData.id == '1Down') {
        console.log('Test Passed')
    } else {
        console.log('Test Failed')
    }
}

export function TestPushToStack() {}

export function TestSort() {}

export function TestPopStack() {}

export function TestSeeSensorData() {}
