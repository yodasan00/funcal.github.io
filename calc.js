/*this is different apporach to calculator here I took the number and operators as strings and convert it to 
numerical value then again display it as string hehe this way it results in shorter code rather than long 
code of switch case though through switch case it is much easier ;-)
Here I have divide the code into different sections and what it does bhanera  */


//To inti global val hehe~~All are global for its manipulation and avoid repetion//
let current = "0"; //this value will be shown
let res=false; //to check for aritheatic operator is present or not (thats why boolean hehe)

//to take val from button ;-)
function calculate(value) {
  if (current === "0" || res) {
    current = value;
  } else {
    current += value;
  }
  res=false;
  update();
}

//to display contents
function update() {
  const displayElement = document.getElementById("o");
  displayElement.textContent = current;
}

//to calculate result
function result() {
    try {
      const result = eval(current);
      current += "\n" + "="+ result.toString();
      update();
    } catch (error) {
      current += "\n!Enter correctly u piece of shit brain!";
      update();
    }
    res=true;
  }

//to clear the digit
  function clearl() {
    current = current.slice(0, -1);
    if (current === "") {
      current = "0";
    }
    update();
  }

//to clear whole display
  function cleard() {
    current = "0";
    update();
  }

//yeti ho code lus ;-)