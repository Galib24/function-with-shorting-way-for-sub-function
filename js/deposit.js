function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    // 1. get element by id
    // 2. get the value from the element
    // 3.convert string value to a number
})