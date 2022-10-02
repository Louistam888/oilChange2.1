const oilChangeStatus = document.querySelector(".oilChangeStatus");
const remaining = document.querySelector(".remaining");
const nextChange = document.querySelector(".nextChange");

const form = document.querySelector("form");
form.addEventListener("submit", (event)=> {
  event.preventDefault();
  oilChangeStatus.classList.remove("yup", "nope", "huh"); 
  oilChangeStatus.innerHTML = "";
  remaining.innerHTML = "";
  nextChange.innerHTML = "";

  const unit = document.querySelector("#unit option:checked").value;
  const oilType = document.querySelector("#lastOilType option:checked").value;
  const lastOilChange = document.querySelector("#odoStart").value;
  const currentOdoReading = document.querySelector("#odoEnd").value;  
  const mileage = currentOdoReading - lastOilChange;
  

  const km = {

    syntheticOverdue: {
      "oilChangeClass": "yup", 
      "oilChangeStatus": "yes", 
      "remaining": `You are ` + (mileage - 10000) + ` kms overdue for an oil change. Synthetic oil must be changed every 10,000 kms.`,
      "nextChange": "Get an oil change now. "
    },
    syntheticNotOverdue: {
      "oilChangeClass": "nope",
      "oilChangeStatus": "No", 
      "remaining": `Synthetic oil only needs to be changed every 10,000 kms.`,
      "nextChange": `Your next oil change will be in ` + (10000 - mileage) + ` kms.`
    },
    conventionalOverdue: {
      "oilChangeClass": "yup", 
      "oilChangeStatus": "yes", 
      "remaining": `You are ` + (mileage - 5000) + ` kms overdue for an oil change. Conventional oil must be changed every 5,000 kms.`,
      "nextChange": "Get an oil change now. "
    }, 
    conventionalNotOverdue: {
      "oilChangeClass": "nope", 
      "oilChangeStatus": "No", 
      "remaining": `Conventional oil only needs to be changed every 5,000 kms.`,
      "nextChange": `Your next oil change will be in ` + (5000 - mileage) + ` kms.`
    },
  
    noIdeaOverdue: {
      "oilChangeClass": "yup", 
      "oilChangeStatus": "yes", 
      "remaining": `Since you don't know what kind of oil is in your car, we will presume it is conventional oil. Conventional oil must be changed every 5,000 kms. You may be ` + (mileage - 5000) + ` kms overdue for an oil change."`, 
      "nextChange": `Get an oil change now.`
    },
  
    noIdeaNotOverdue: {
      "oilChangeClass": "nope",
      "oilChangeStatus": "No", 
      "remaining": `Since you don't know what kind of oil is in your car, we will presume it is conventional oil. Conventional oil only needs to be changed every 5,000 kms.`,
      "nextChange": `Your next oil change will be in ` + (5000 - mileage) + ` kms.`
    }
  }
  
  const miles = {

    syntheticOverdue: {
      "oilChangeClass": "yup", 
      "oilChangeStatus": "yes", 
      "remaining": `You are ` + (mileage - 6200) + ` miles overdue for an oil change. Synthetic oil must be changed every 6,200 miles.`,
      "nextChange": "Get an oil change now. "
    },
    syntheticNotOverdue: {
      "oilChangeClass": "nope", 
      "oilChangeStatus": "No", 
      "remaining": `Synthetic oil only needs to be changed every 6,200km.`,
      "nextChange": `Your next oil change will be in ` + (6200 - mileage) + ` miles.`
    },
    conventionalOverdue: {
      "oilChangeClass": "yup", 
      "oilChangeStatus": "yes", 
      "remaining": `You are ` + (mileage - 3100) + ` miles overdue for an oil change. Conventional oil must be changed every 3,100 miles.`,
      "nextChange": "Get an oil change now. "
    }, 
    conventionalNotOverdue: {
      "oilChangeClass": "nope", 
      "oilChangeStatus": "No", 
      "remaining": `Conventional oil only needs to be changed every 3,100 miles.`,
      "nextChange": `Your next oil change will be in ` + (3100 - mileage) + ` miles.`
    },
    noIdeaOverdue: {
      "oilChangeClass": "yup", 
      "oilChangeStatus": "yes", 
      "remaining": `Since you don't know what kind of oil is in your car, we will presume it is conventional oil. Conventional oil must be changed every 3,100kms. You may be ` + (mileage - 3100) + ` miles overdue for an oil change.`, 
      "nextChange": `Get an oil change now.`
    },
    noIdeaNotOverdue: {
      "oilChangeClass": "nope",
      "oilChangeStatus": "No", 
      "remaining": `Since you don't know what kind of oil is in your car, we will presume it is conventional oil. Conventional oil only needs to be changed every 3,100 miles.`,
      "nextChange": `Your next oil change will be in ` + (3100 - mileage) + ` miles.`
    }
  }
  
  const metric = ()  => {
    if (mileage >=0 && mileage <= 5000) {
  
      if(oilType === "synthetic") {
        oilChangeStatus.classList = km.syntheticNotOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = km.syntheticNotOverdue.oilChangeStatus;
        remaining.innerHTML = km.syntheticNotOverdue.remaining;
        nextChange.innerHTML = km.syntheticNotOverdue.nextChange;
  
      } else if (oilType === "conventional") {
        oilChangeStatus.classList = km.conventionalNotOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = km.conventionalNotOverdue.oilChangeStatus;
        remaining.innerHTML = km.conventionalNotOverdue.remaining;
        nextChange.innerHTML = km.conventionalNotOverdue.nextChange;
      } else if (oilType === "noIdea") {
        oilChangeStatus.classList = km.noIdeaNotOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = km.noIdeaNotOverdue.oilChangeStatus;
        remaining.innerHTML = km.noIdeaNotOverdue.remaining;
        nextChange.innerHTML = km.noIdeaNotOverdue.nextChange;
      }

    } else if (mileage >=5000 && mileage <= 10000) {
      
      if(oilType === "synthetic") {
        oilChangeStatus.classList = km.syntheticNotOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = km.syntheticNotOverdue.oilChangeStatus;
        remaining.innerHTML = km.syntheticNotOverdue.remaining;
        nextChange.innerHTML = km.syntheticNotOverdue.nextChange;
  
      } else if (oilType === "conventional") {
        oilChangeStatus.classList = km.conventionalOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = km.conventionalOverdue.oilChangeStatus;
        remaining.innerHTML = km.conventionalOverdue.remaining;
        nextChange.innerHTML = km.conventionalOverdue.nextChange;
      } else if (oilType === "noIdea") {
        oilChangeStatus.classList = km.noIdeaOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = km.noIdeaOverdue.oilChangeStatus;
        remaining.innerHTML = km.noIdeaOverdue.remaining;
        nextChange.innerHTML = km.noIdeaOverdue.nextChange;
      }

    } else if (mileage > 10000) {

      if(oilType === "synthetic") {
        oilChangeStatus.classList = km.syntheticOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = km.syntheticOverdue.oilChangeStatus;
        remaining.innerHTML = km.syntheticOverdue.remaining;
        nextChange.innerHTML = km.syntheticOverdue.nextChange;
  
      } else if (oilType === "conventional") {
        oilChangeStatus.classList = km.conventionalOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = km.conventionalOverdue.oilChangeStatus;
        remaining.innerHTML = km.conventionalOverdue.remaining;
        nextChange.innerHTML = km.conventionalOverdue.nextChange;

      } else if (oilType === "noIdea") {
        oilChangeStatus.classList = km.noIdeaOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = km.noIdeaOverdue.oilChangeStatus;
        remaining.innerHTML = km.noIdeaOverdue.remaining;
        nextChange.innerHTML = km.noIdeaOverdue.nextChange;
      }
    }
  }

  const imperial = () => {
    if (mileage >= 0 && mileage <= 3100) {
  
      if(oilType === "synthetic") {
        
        oilChangeStatus.classList = miles.syntheticNotOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = miles.syntheticNotOverdue.oilChangeStatus;
        remaining.innerHTML = miles.syntheticNotOverdue.remaining;
        nextChange.innerHTML = miles.syntheticNotOverdue.nextChange; 
  
      } else if (oilType === "conventional") {

        oilChangeStatus.classList = miles.conventionalNotOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = miles.conventionalNotOverdue.oilChangeStatus;
        remaining.innerHTML = miles.conventionalNotOverdue.remaining;
        nextChange.innerHTML = miles.conventionalNotOverdue.nextChange;

      } else if (oilType === "noIdea") {

        oilChangeStatus.classList = miles.noIdeaNotOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = miles.noIdeaNotOverdue.oilChangeStatus;
        remaining.innerHTML = miles.noIdeaNotOverdue.remaining;
        nextChange.innerHTML = miles.noIdeaNotOverdue.nextChange;
      }

    } else if (mileage >=3100 && mileage <= 6200) {
      
      if(oilType === "synthetic") {
        oilChangeStatus.classList = miles.syntheticNotOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = miles.syntheticNotOverdue.oilChangeStatus;
        remaining.innerHTML = miles.syntheticNotOverdue.remaining;
        nextChange.innerHTML = miles.syntheticNotOverdue.nextChange;
  
      } else if (oilType === "conventional") {
        oilChangeStatus.classList = miles.conventionalOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = miles.conventionalOverdue.oilChangeStatus;
        remaining.innerHTML = miles.conventionalOverdue.remaining;
        nextChange.innerHTML = miles.conventionalOverdue.nextChange;
 
      } else if (oilType === "noIdea") {
        oilChangeStatus.classList = miles.noIdeaOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = miles.noIdeaOverdue.oilChangeStatus;
        remaining.innerHTML = miles.noIdeaOverdue.remaining;
        nextChange.innerHTML = miles.noIdeaOverdue.nextChange;
      }

    } else if (mileage > 6200) {

      if(oilType === "synthetic") {
    
        oilChangeStatus.classList = miles.syntheticOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = miles.syntheticOverdue.oilChangeStatus;
        remaining.innerHTML = miles.syntheticOverdue.remaining;
        nextChange.innerHTML = miles.syntheticOverdue.nextChange;
  
      } else if (oilType === "conventional") {
        oilChangeStatus.classList = miles.conventionalOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = miles.conventionalOverdue.oilChangeStatus;
        remaining.innerHTML = miles.conventionalOverdue.remaining;
        nextChange.innerHTML = miles.conventionalOverdue.nextChange;

      } else if (oilType === "noIdea") {
        oilChangeStatus.classList = miles.noIdeaOverdue.oilChangeClass;
        oilChangeStatus.innerHTML = miles.noIdeaOverdue.oilChangeStatus;
        remaining.innerHTML = miles.noIdeaOverdue.remaining;
        nextChange.innerHTML = miles.noIdeaOverdue.nextChange;
      }
    }
  }

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


const resetForm = document.querySelector(".resetButton");
resetForm.addEventListener("click", (event) => {
  oilChangeStatus.classList.remove("yup", "nope", "huh");
  oilChangeStatus.innerHTML = "";
  remaining.innerHTML = "";
  nextChange.innerHTML = "";
})
