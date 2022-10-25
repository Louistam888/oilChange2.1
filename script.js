//USER  INPUTS 
const oilChangeStatus = document.querySelector(".oilChangeStatus");
const remaining = document.querySelector(".remaining");
const nextChange = document.querySelector(".nextChange");

//FORM START  
const form = document.querySelector("form");
form.addEventListener("submit", (event)=> {
  event.preventDefault();

  //remove all fields in answer section
  oilChangeStatus.classList.remove("yup", "nope", "huh"); 
  oilChangeStatus.innerHTML = "";
  remaining.innerHTML = "";
  nextChange.innerHTML = "";

  //query selectors for user selection 
  const unit = document.querySelector("#unit option:checked").value;
  const oilType = document.querySelector("#lastOilType option:checked").value;
  const lastOilChange = document.querySelector("#odoStart").value;
  const currentOdoReading = document.querySelector("#odoEnd").value;  

  const mileage = currentOdoReading - lastOilChange;

  //function to add commas to numbers 
  const addCommas = (num) => { 
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); 
  }; 
  
  //function to remove commas from numbers 
  const removeCommas = (num) => {
    const removed = parseFloat('100,000.00'.replace(/,/g, ''))
    return removed
  }
  
  //metric function for determining if oil change is needed 
  const metric = ()  => {
    if (mileage >=0 && mileage <= 5000) {
  
      if(oilType === "synthetic") {
        oilChangeStatus.classList = "nope";
        oilChangeStatus.innerHTML = "no";
        remaining.innerHTML = `Synthetic oil only needs to be changed every 10,000 kms.`;
        nextChange.innerHTML = `Your next oil change will be in ` + (addCommas(10000 - mileage)) + ` kms.`
  
      } else if (oilType === "conventional") {
        oilChangeStatus.classList = "nope";
        oilChangeStatus.innerHTML = "no";
        remaining.innerHTML = `Conventional oil only needs to be changed every 5,000 kms.`;
        nextChange.innerHTML = `Your next oil change will be in ` + (addCommas(5000 - mileage)) + ` kms.`;      

      } else if (oilType === "noIdea") {
        oilChangeStatus.classList = "nope";
        oilChangeStatus.innerHTML = "No";
        remaining.innerHTML = `Since you don't know what kind of oil is in your car, we will presume it is conventional oil. Conventional oil only needs to be changed every 5,000 kms.`;
        nextChange.innerHTML = `Your next oil change will be in ` + (addCommas(5000 - mileage)) + ` kms.`;
      }

    } else if (mileage >=5000 && mileage <= 10000) {
      
      if(oilType === "synthetic") {
        oilChangeStatus.classList = "nope";
        oilChangeStatus.innerHTML = "no";
        remaining.innerHTML = `Synthetic oil only needs to be changed every 10,000 kms.`,
        nextChange.innerHTML = `Your next oil change will be in ` + (addCommas(10000 - mileage)) + ` kms.`
  
      } else if (oilType === "conventional") {
        oilChangeStatus.classList = "yup";
        oilChangeStatus.innerHTML = "yes";
        remaining.innerHTML = `You are ` + (addCommas(mileage - 5000)) + ` kms overdue for an oil change. Conventional oil must be changed every 5,000 kms.`;
        nextChange.innerHTML = "Get an oil change now."

      } else if (oilType === "noIdea") {
        oilChangeStatus.classList = "yup";
        oilChangeStatus.innerHTML = "yes";
        remaining.innerHTML = `Since you don't know what kind of oil is in your car, we will presume it is conventional oil. Conventional oil must be changed every 5,000 kms. You may be ` + (addCommas(mileage - 5000))+ ` kms overdue for an oil change.`;
        nextChange.innerHTML = `Get an oil change now.`
      }

    } else if (mileage > 10000) {

      if(oilType === "synthetic") {
        oilChangeStatus.classList = "yup";
        oilChangeStatus.innerHTML = "yes";
        remaining.innerHTML = `You are ` + (addCommas(mileage - 10000)) + ` kms overdue for an oil change. Synthetic oil must be changed every 10,000 kms.`;
        nextChange.innerHTML = "Get an oil change now. "
  
      } else if (oilType === "conventional") {
        oilChangeStatus.classList = "yup";
        oilChangeStatus.innerHTML = "yes";
        remaining.innerHTML = `You are ` + (addCommas(mileage - 5000)) + ` kms overdue for an oil change. Conventional oil must be changed every 5,000 kms.`;
        nextChange.innerHTML = "Get an oil change now."


      } else if (oilType === "noIdea") {
        oilChangeStatus.classList = "yup";
        oilChangeStatus.innerHTML = "yes";
        remaining.innerHTML = `Since you don't know what kind of oil is in your car, we will presume it is conventional oil. Conventional oil must be changed every 5,000 kms. You may be ` + (addCommas(mileage - 5000)) + ` kms overdue for an oil change.`;;
        nextChange.innerHTML = `Get an oil change now.`
      }
    }
  }

  //imperial function for determining if oil change is needed
  const imperial = () => {
    if (mileage >= 0 && mileage <= 3100) {
  
      if(oilType === "synthetic") {
        
        oilChangeStatus.classList = "nope";
        oilChangeStatus.innerHTML = "no";
        remaining.innerHTML = `Synthetic oil only needs to be changed every 6,200 miles.`
        nextChange.innerHTML = `Your next oil change will be in ` + (addCommas(6200 - mileage)) + ` miles.`
  
      } else if (oilType === "conventional") {

        oilChangeStatus.classList = "nope";
        oilChangeStatus.innerHTML = "no";
        remaining.innerHTML = `Conventional oil only needs to be changed every 3,100 miles.`;
        nextChange.innerHTML = `Your next oil change will be in ` + (addCommas(3100 - mileage)) + ` miles.`;


      } else if (oilType === "noIdea") {

        oilChangeStatus.classList = "nope";
        oilChangeStatus.innerHTML = "no";
        remaining.innerHTML = `Since you don't know what kind of oil is in your car, we will presume it is conventional oil. Conventional oil only needs to be changed every 3,100 miles.`,
        nextChange.innerHTML = `Your next oil change will be in ` + (addCommas(3100 - mileage)) + ` miles.`;
      }

    } else if (mileage >=3100 && mileage <= 6200) {
      
      if(oilType === "synthetic") {
        oilChangeStatus.classList = "nope";
        oilChangeStatus.innerHTML = "no";
        remaining.innerHTML = `Synthetic oil only needs to be changed every 6,200 miles.`
        nextChange.innerHTML = `Your next oil change will be in ` + (addCommas(6200 - mileage)) + ` miles.`
  
      } else if (oilType === "conventional") {
        oilChangeStatus.classList = "yup";
        oilChangeStatus.innerHTML = "yes";
        remaining.innerHTML = `You are ` + (addCommas(mileage - 3100)) + ` miles overdue for an oil change. Conventional oil must be changed every 3,100 miles.`;
        nextChange.innerHTML = "Get an oil change now."
 
      } else if (oilType === "noIdea") {
        oilChangeStatus.classList = "yup";
        oilChangeStatus.innerHTML = "yes";
        remaining.innerHTML = `Since you don't know what kind of oil is in your car, we will presume it is conventional oil. Conventional oil must be changed every 3,100 miles. You may be ` + (addCommas(mileage - 3100)) + ` miles overdue for an oil change.`;
        nextChange.innerHTML = `Get an oil change now.`;
      }

    } else if (mileage > 6200) {

      if(oilType === "synthetic") {
    
        oilChangeStatus.classList = "yup";
        oilChangeStatus.innerHTML = "yes";
        remaining.innerHTML = `You are ` + (addCommas(mileage - 6200)) + ` miles overdue for an oil change. Synthetic oil must be changed every 6,200 miles.`
        nextChange.innerHTML = "Get an oil change now."
  
      } else if (oilType === "conventional") {
        oilChangeStatus.classList = "yup";
        oilChangeStatus.innerHTML = "yes";
        remaining.innerHTML = `You are ` + (addCommas(mileage - 3100)) + ` miles overdue for an oil change. Conventional oil must be changed every 3,100 miles.`;
        nextChange.innerHTML = "Get an oil change now."

      } else if (oilType === "noIdea") {
        oilChangeStatus.classList = "yup";
        oilChangeStatus.innerHTML = "yes";
        remaining.innerHTML = `Since you don't know what kind of oil is in your car, we will presume it is conventional oil. Conventional oil must be changed every 3,100 miles. You may be ` + (addCommas(mileage - 3100)) + ` miles overdue for an oil change.`;;
        nextChange.innerHTML = `Get an oil change now.`;
      }
    }
  }

  //decision tree function 
  if (mileage < 0) { 
    setTimeout(() => {
      oilChangeStatus.classList = "huh"
      oilChangeStatus.innerHTML = "?"
      remaining.innerHTML = "Your odometer can't go backwards! Try again."
    }, 100);
  } else if (mileage >= 0 && unit === "km") {
    setTimeout(() => {
      metric();
    }, 100);
      
  } else if (mileage >= 0 && unit === "miles") {
    setTimeout(() => {
      imperial();
    }, 100);
  } 
});

//reset button 
const resetForm = document.querySelector(".resetButton");
resetForm.addEventListener("click", (event) => {
  oilChangeStatus.classList.remove("yup", "nope", "huh");
  oilChangeStatus.innerHTML = "";
  remaining.innerHTML = "";
  nextChange.innerHTML = "";
})
