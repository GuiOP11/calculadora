const previusOperationText = document.querySelector("#previus-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelector("#buttons-container button");

class Calculator {

}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

     if(+value >= 0 || value === '.') {
        console.log(value);
     }else {
        console.log("Op:"+ value);
     }
    });
});
