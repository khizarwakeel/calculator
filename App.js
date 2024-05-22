const inputCal = document.getElementById("inputCal");
const historyPara = document.getElementById("historyResult");

const finalResultHistory = [];
inputCal.focus();

const getValue = (num) => {
    inputCal.value += num
    inputCal.focus()
}

const clearResult = () => {
    inputCal.value = ""
    inputCal.focus()
}

const getCalculation = () => {

    inputCal.value = eval(inputCal.value)
    finalResultHistory.push(inputCal.value)
    historyPara.innerHTML = finalResultHistory.join("<br />");
    inputCal.focus()
}