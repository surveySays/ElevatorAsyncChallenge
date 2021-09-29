# ElevatorAsyncChallenge
Create a real-world elevator that asynchronously accepts input while maintaining current elevator motion.

![image](https://user-images.githubusercontent.com/35376662/135336424-4a76b382-8902-452d-97cd-a0e954577f36.png)

- Elevator disables outside entry if weight limit is currently exceeded, inside elevator entry is still permitted.
- Elevator goes to nearest floor based on current floor it is at and traveling direction.
- Asynchronously accepts new floors to be added to the call stack while the elevator is in motion.
- Dynamic for web and mobile viewing platforms.

Code Stack:
- Written in React.js.
- Uses Redux for global state management.
- Uses React Hooks with useEffect Hook for state changes.
- Deployment via Firebase.
- Some styled buttons used from Material UI.


Unit test written (although not being run):
- TestMove()
- TestCheckStack()
- TestPushToStack()
- TestSort()
- TestPopStack()
- TestSeeSensorData()


Steps to run locally:
1. clone repo
2. open via VS code
3. run command 'npm i' -> will install packages
4. run command 'npm start' -> should run locally and open to default webhost
