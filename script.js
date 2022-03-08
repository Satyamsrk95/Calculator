let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let inputScreen = document.querySelector("input")
let screenValue = "";
let mode = false;
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "Ac") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else if (buttonText == "Ce") {
        screen.value = screen.value.slice(0, -1);
      
    } else if(buttonText=="M"){
        
        if(mode ==false){
            
            inputScreen.style.backgroundColor="white";
            mode = true;}
        else {
            inputScreen.style.backgroundColor="red";
            mode = false;
        }
     
    }else{
        screenValue += buttonText;
      screen.value = screenValue; 
    }
  });
}
