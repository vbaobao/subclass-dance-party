$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //dancerMakerFunction();

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });


  $('.danceButton').on('click', function(event) {
    // Event listener for line up button
    //loop through created dancers (on click) and tell each object to lineUp()
    // lineUp(top,left) that we assign
    // The for loop will call lineup through the dancer array
    //Each iteration of the loop will increment the top parameter
    //toggle the class to align on each already created dancer/class
    //move position of all dancers to side
    var $position = $this.position();
    let start = 50;
    for (const dancer of window.dancers) {
      dancer.lineUp(start);
      start += 25;
    }
  });
});

