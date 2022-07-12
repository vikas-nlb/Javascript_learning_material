
function learnSwitch(option) {
  // Switch case allows us to have multiple cases , each case should have a unique identifier as its name.
  // when the given input of the switch matches tany of the cases declared then that set of code inside that case is run
  //After successfully running the selected case the execution comes out of switch case

  switch (option) {
    case "one":
      console.log("One option selected");
      break;
    case "two":
      console.log("Two option selected");
      break;
  }
}

learnSwitch("two");

