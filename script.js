//input on starting mileage

//input on current mileage

//add considerations of oil conventional 5k synthetic 10k dont know 5k

//create variable for starting milage
//create variable for ending mileage
//create variable for total mileage travelled 
//create boolean operators for oil types 

//create remaining mileage count variable for syntethnic and other options 


$(document).ready(function(){

// VARIABLES FOR MILEAGE CALCULATIONS  

  let odoStart = 0;
  let odoEnd = 0;
  let lastOilType = undefined;

//***ON CLICKING SUBMIT BUTTON***//

  $('form').on('submit', function(event) {
    event.preventDefault();
    odoStart = $('#odoStart').val();
    odoEnd = $('#odoEnd').val();
    lastOilType = $('#lastOilType').val();
    unit = $('#unit').val();

// MILEAGE CALCULATIONS 
 
    const mileage = odoEnd-odoStart;

    if (mileage < 0) {

      $('.oilChangeStatus').removeClass(`yup nope huh`),

      $('.oilChangeStatus').hide(), 
      $('.oilChangeStatus').text('?').fadeIn(500), 

      $('.oilChangeStatus').addClass('huh'),

      $('.remaining').hide(),
      $('.remaining').text(`Your odometer can't go backwards! Try again.`).fadeIn(500),

      $('.nextChange').hide(),
      $('.nextChange').text('');
      
    } else if (unit == "km") {

      const rawSyntheticRemaining = 10000-mileage;
      const synthenticRemaining = rawSyntheticRemaining.toLocaleString('en-us');
  
      const rawConNoIdeaRemaining = 5000-mileage;
      const conNoIdeaRemaining = rawConNoIdeaRemaining.toLocaleString('en-us');
  
      const rawOverdueSyn = mileage-10000;
      const overdueSyn = rawOverdueSyn.toLocaleString('en-us');
  
      const rawOverdueConNoIdea = mileage-5000;
      const overdueConNoIdea = rawOverdueConNoIdea.toLocaleString('en-us');
  
//  METRIC ANSWERS IF MILEAGE IS OVER 10,000KM
      if (mileage >= 10000) {
        if (lastOilType == "synthetic") {
          $('.oilChangeStatus').removeClass(`yup nope huh`),
          
          $('.oilChangeStatus').hide(), 
          $('.oilChangeStatus').text(`Yes`).fadeIn(500),
         
          $('.oilChangeStatus').addClass(`yup`),

          $('.remaining').hide(),
          $('.remaining').text(`You are overdue for an oil change. Since synthetic oil needs to be changed every 10,000 km, you are ${overdueSyn} km overdue. Get an oil change now.`).fadeIn(500),

          $('.nextChange').hide(),
          $('.nextChange').text(``).fadeIn(500);

        } else if (lastOilType == "conventional") {
          $('.oilChangeStatus').removeClass(`yup nope huh`),

          $('.oilChangeStatus').hide(), 
          $('.oilChangeStatus').text(`Yes`).fadeIn(500),
          
          $('.oilChangeStatus').addClass(`yup`),

          $('.remaining').hide(),
          $('.remaining').text(`You are overdue for an oil change. Since conventional oil needs to be changed every 5,000 km, you are ${overdueConNoIdea} km overdue. Get an oil change now.`).fadeIn(500),

          $('.nextChange').hide(),
          $('.nextChange').text('').fadeIn(500);

        } else if (lastOilType == "noIdea") {
          $('.oilChangeStatus').removeClass(`yup nope huh`),

          $('.oilChangeStatus').hide(), 
          $('.oilChangeStatus').text(`Yes`).fadeIn(500),
          
          $('.oilChangeStatus').addClass(`yup`),

          $('.remaining').hide(),
          $('.remaining').text(`Since you don't know what kind of oil is in your car, we will assume it is conventional. Conventional oil needs to be changed every 5,000 km, so you may be ${overdueConNoIdea} km overdue.\n\nGet an oil change now.`).fadeIn(500),

          $('.nextChange').hide(),
          $('.nextChange').text('').fadeIn(500);
        }

  // ANSWERS IF MILEAGE IS BETWEEN 5,000KM AND 10,000KM
      } else if (mileage < 10000 && mileage >= 5000) {
        if (lastOilType == "synthetic") {
          $('.oilChangeStatus').removeClass(`yup nope huh`),

          $('.oilChangeStatus').hide(), 
          $('.oilChangeStatus').text('no').fadeIn(500),
        
          $('.oilChangeStatus').addClass('nope'),

          $('.remaining').hide(),
          $('.remaining').text(`With synthetic oil, your next oil change will be in:`).fadeIn(500),

          $('.nextChange').hide(),
          $('.nextChange').text(`${synthenticRemaining} km`).fadeIn(500);

        } else if ((lastOilType == "conventional")) {
          $('.oilChangeStatus').removeClass(`yup nope huh`),

          $('.oilChangeStatus').hide(), 
          $('.oilChangeStatus').text(`Yes`).fadeIn(500),
          
          $('.oilChangeStatus').addClass(`yup`),

          $('.remaining').hide(),
          $('.remaining').text(`You are ${overdueConNoIdea} km overdue for an oil change. Get on oil change now.`).fadeIn(500),

          $('.nextChange').hide(),
          $('.nextChange').text('').fadeIn(500);

        } else if ((lastOilType == "noIdea")) {
          $('.oilChangeStatus').removeClass(`yup nope huh`),

          $('.oilChangeStatus').hide(), 
          $('.oilChangeStatus').text(`Yes`).fadeIn(500),
       
          $('.oilChangeStatus').addClass(`yup`),

          $('.remaining').hide(),
          $('.remaining').text(`Since you don't know what kind of oil is in your car, we will assume it is conventional. Conventional oil needs to be changed every 5,000 km, so you may be ${overdueConNoIdea} km overdue.\n\nGet an oil change now.`).fadeIn(500),

          $('.nextChange').hide(),
          $('.nextChange').text('').fadeIn(500);
        }

  // ANSWERS IF MILEAGE IS UNDER 5,000KM
      } else if (mileage <= 4999 && mileage >= 0) {
        if (lastOilType == "synthetic") { 
          $('.oilChangeStatus').removeClass(`yup nope huh`),

          $('.oilChangeStatus').hide(), 
          $('.oilChangeStatus').text(`No`).fadeIn(500),
          
          $('.oilChangeStatus').addClass('nope'), 

          $('.remaining').hide(),
          $('.remaining').text(`With synthetic oil, your next oil change will be in:`).fadeIn(500),

          $('.nextChange').hide(),
          $('.nextChange').text(`${synthenticRemaining} km`).fadeIn(500);

        } else if ((lastOilType == "conventional")) {
          $('.oilChangeStatus').removeClass(`yup nope huh`),

          $('.oilChangeStatus').hide(), 
          $('.oilChangeStatus').text(`No`).fadeIn(500), 
         
          $('.oilChangeStatus').addClass('nope'),

          $('.remaining').hide(),
          $('.remaining').text(`With conventional oil, your next oil change will be in:`).fadeIn(500),

          $('.nextChange').hide(),
          $('.nextChange').text(`${conNoIdeaRemaining} km`).fadeIn(500);

        } else if ((lastOilType =="noIdea")) {
          $('.oilChangeStatus').removeClass(`yup nope huh`),

          $('.oilChangeStatus').hide(), 
          $('.oilChangeStatus').text(`No`).fadeIn(500), 
          
          $('.oilChangeStatus').addClass('nope'),

          $('.remaining').hide(),
          $('.remaining').text(`Since you don't know what kind of oil is in your car, we will assume it is conventional.Conventional oil needs to be changed every 5,000 km.\n\nBased on this assumption, your next oil change will be in:\n`).fadeIn(500),

          $('.nextChange').hide(),
          $('.nextChange').text(`${conNoIdeaRemaining} km`).fadeIn(500);
        }     
      };     
      
//  IMPERIAL ANSWERS IF MILEAGE IS OVER 6200 MILES 
    } else if (unit == "miles") {

      const rawSyntheticRemaining = 6200-mileage;
      const synthenticRemaining = rawSyntheticRemaining.toLocaleString('en-us');
    
      const rawConNoIdeaRemaining = 3100-mileage;
      const conNoIdeaRemaining = rawConNoIdeaRemaining.toLocaleString('en-us');
    
      const rawOverdueSyn = mileage-6200;
      const overdueSyn = rawOverdueSyn.toLocaleString('en-us');
    
      const rawOverdueConNoIdea = mileage-3100;
      const overdueConNoIdea = rawOverdueConNoIdea.toLocaleString('en-us');     

        if (mileage >= 6200) {
          if (lastOilType == "synthetic") {

            $('.oilChangeStatus').removeClass(`yup nope huh`),

            $('.oilChangeStatus').hide(), 
            $('.oilChangeStatus').text(`Yes`).fadeIn(500),
           
            $('.oilChangeStatus').addClass(`yup`),

            $('.remaining').hide(),
            $('.remaining').text(`You are overdue for an oil change. Since synthetic oil needs to be changed every 6,200 miles, you are ${overdueSyn} miles overdue. Get an oil change now.`).fadeIn(500),

            $('.nextChange').hide(),
            $('.nextChange').text(``).fadeIn(500);
    
          } else if (lastOilType == "conventional") {
            $('.oilChangeStatus').removeClass(`yup nope huh`),

            $('.oilChangeStatus').hide(), 
            $('.oilChangeStatus').text(`Yes`).fadeIn(500),
            
            $('.oilChangeStatus').addClass(`yup`),

            $('.remaining').hide(),
            $('.remaining').text(`You are overdue for an oil change. Since conventional oil needs to be changed every 3,100 miles, you are ${overdueConNoIdea} miles overdue. Get an oil change now.`).fadeIn(500),

            $('.nextChange').hide(),
            $('.nextChange').text('').fadeIn(500);
    
          } else if (lastOilType == "noIdea") {
            $('.oilChangeStatus').removeClass(`yup nope huh`),

            $('.oilChangeStatus').hide(), 
            $('.oilChangeStatus').text(`Yes`).fadeIn(500),
            
            $('.oilChangeStatus').addClass(`yup`),

            $('.remaining').hide(),
            $('.remaining').text(`Since you don't know what kind of oil is in your car, we will assume it is conventional. Conventional oil needs to be changed every 3,100 miles, so you may be ${overdueConNoIdea} miles overdue.\n\nGet an oil change now.`).fadeIn(500),

            $('.nextChange').hide(),
            $('.nextChange').text('').fadeIn(500);
          }
    
      // ANSWERS IF MILEAGE IS BETWEEN 6,200 MILES AND 3100 MILES
        } else if (mileage < 6200 && mileage >= 3100) {
          if (lastOilType == "synthetic") {
            $('.oilChangeStatus').removeClass(`yup nope huh`),

            $('.oilChangeStatus').hide(), 
            $('.oilChangeStatus').text('no').fadeIn(500),
           
            $('.oilChangeStatus').addClass('nope'),

            $('.remaining').hide(),
            $('.remaining').text(`With synthetic oil, your next oil change will be in:`).fadeIn(500),

            $('.nextChange').hide(),
            $('.nextChange').text(`${synthenticRemaining} miles`).fadeIn(500);
    
          } else if ((lastOilType == "conventional")) {
            $('.oilChangeStatus').removeClass(`yup nope huh`),

            $('.oilChangeStatus').hide(), 
            $('.oilChangeStatus').text(`Yes`).fadeIn(500),
           
            $('.oilChangeStatus').addClass(`yup`),

            $('.remaining').hide(),
            $('.remaining').text(`You are ${overdueConNoIdea} miles overdue for an oil change. Get on oil change now.`).fadeIn(500),

            $('.nextChange').hide(),
            $('.nextChange').text('').fadeIn(500);
    
          } else if ((lastOilType == "noIdea")) {
            $('.oilChangeStatus').removeClass(`yup nope huh`),

            $('.oilChangeStatus').hide(), 
            $('.oilChangeStatus').text(`Yes`).fadeIn(500),
           
            $('.oilChangeStatus').addClass(`yup`),

            $('.remaining').hide(),
            $('.remaining').text(`Since you don't know what kind of oil is in your car, we will assume it is conventional. Conventional oil needs to be changed every 3,100 miles, so you may be ${overdueConNoIdea} miles overdue.\n\nGet an oil change now.`).fadeIn(500),

            $('.nextChange').hide(),
            $('.nextChange').text('').fadeIn(500);
          }
    
      // ANSWERS IF MILEAGE IS UNDER 3,100 MILES
        } else if (mileage <= 3100 && mileage >= 0) {
          if (lastOilType == "synthetic") { 
            
            $('.oilChangeStatus').removeClass(`yup nope huh`),
            
            $('.oilChangeStatus').hide(), 
            $('.oilChangeStatus').text(`No`).fadeIn(500),

            $('.oilChangeStatus').addClass('nope'), 

            $('.remaining').hide(),
            $('.remaining').text(`With synthetic oil, your next oil change will be in:`).fadeIn(500),

            $('.nextChange').hide(),
            $('.nextChange').text(`${synthenticRemaining} miles`).fadeIn(500);
    
          } else if ((lastOilType == "conventional")) {

            $('.oilChangeStatus').removeClass(`yup nope huh`),
            
            $('.oilChangeStatus').hide(), 
            $('.oilChangeStatus').text(`No`).fadeIn(500), 
            
            $('.oilChangeStatus').addClass('nope'),

            $('.remaining').hide(),
            $('.remaining').text(`With conventional oil, your next oil change will be in:`).fadeIn(500),

            $('.nextChange').hide(),
            $('.nextChange').text(`${conNoIdeaRemaining} miles`).fadeIn(500);
    
          } else if ((lastOilType =="noIdea")) {
            $('.oilChangeStatus').removeClass(`yup nope huh`),

            $('.oilChangeStatus').hide(), 
            $('.oilChangeStatus').text(`No`).fadeIn(500), 
            
            $('.oilChangeStatus').addClass('nope'),
          
            $('.remaining').hide(),
            $('.remaining').text(`Since you don't know what kind of oil is in your car, we will assume it is conventional. Conventional oil needs to be changed every 3,100 miles.\n\nBased on this assumption, your next oil change will be in:\n`).fadeIn(500),

            $('.nextChange').hide(),
            $('.nextChange').text(`${conNoIdeaRemaining} miles`).fadeIn(500);
          }
        }            
      // ANSWER IF SOMEONE ENTERS A LARGER END ODOMETER READING THAN THE STARTING READING       
    
    };
  
  }); // for functionevent submit


//***ON CLICKING RESET BUTTON***//
    $('form').on('reset', function(reset) {
      odoStart = 0;
      odoEnd = 0;

      $('.oilChangeStatus').text(``),
      $('.remaining').text(``),
      $('.nextChange').text(``);
    });
    
  
}); //for document ready



