function getCounter(initialValue, stepValue) {
    initialValue = initialValue || 0;
    stepValue = stepValue || 1;

    function increment() {
        return initialValue = initialValue + stepValue;
    }

    function decrement() {
        return (initialValue > 1) ? initialValue = initialValue - stepValue : 0;
    }

    function displayCountStep() {
        console.log('COUNT VALUE: ', initialValue);
        console.log('STEP VALUE:  ', stepValue);
    }
    return {
        increment: increment,
        decrement: decrement,
        displayCountStep: displayCountStep,
    }
}

var iniValue = parseInt(prompt('Please enter initital value:'));

var stValue = parseInt(prompt('Please enter step value:'));

var counter = getCounter(iniValue, stValue);