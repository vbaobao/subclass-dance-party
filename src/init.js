$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
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


  $('.danceButton').on('click', function (event) {
    let start = 100;
    // let isLeft = true;
    for (const [index, dancer] of window.dancers.entries()) {
      dancer.lineUp(start);
      start += 25;
      // if (window.dancers[index] === makeTacoNyan) {
      //   isLeft = !isLeft;
      // }
    }
  });

  $('.pairButton').on('click', function (event) {
    let notPaired = [...window.dancers];
    for (const dancer of window.dancers) {
      let position1 = dancer.$node.position();
      let x1 = position1.left;
      let y1 = position1.top;
      //another dancer, to find their coordinations
      for (const pair of window.dancers) {
        let position2 = pair.$node.position();
        let x2 = position2.left;
        let y2 = position2.top;
        distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        console.log('distance:', distance);

        if (distance <= 250 && distance !== 0) {
          console.log('distance:', distance);
          dancer.$node.addClass('makeBig');
          pair.$node.addClass('makeBig');
        }
      }
    }
  });

  $('body').on('mouseover', '.dancer', function () {
    let newTop = $('body').height() * Math.random();
    let newLeft = $('body').width() * Math.random();
    $(this).css({
      top: newTop,
      left: newLeft
    });
  });

});
