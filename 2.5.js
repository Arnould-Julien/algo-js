const prompt = require("prompt-sync")({
    sigint: true
  });
  
  let favoriteNumber;
  do {
    favoriteNumber = prompt("What is your favorite number? ");
    if(favoriteNumber != 42){
      console.log("Are you sure?");
    }
  } while(favoriteNumber != 42);
  console.log("Great choice!");