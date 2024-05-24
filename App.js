const inputCal = document.getElementById("inputCal");
const historyPara = document.getElementById("historyResult");
let counter = 1;

const finalResultHistory = [];

const getValue = (num) => {
    inputCal.value += num;
    inputCal.focus();
}

const clearResult = () => {
    inputCal.value = "";
    inputCal.focus();
}

const getCalculation = () => {
    try {
        const result = eval(inputCal.value);
        const calculationString = `${counter}. ${inputCal.value} = ${result}`;

        finalResultHistory.push(calculationString);
        historyPara.innerHTML = finalResultHistory.join(`<br />`);
        inputCal.value = result;

        counter++;
        inputCal.focus();

    } catch (error) {
        inputCal.value = "Error";
        inputCal.focus();
    }
}