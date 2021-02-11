//Check off Specific Todos by clicking
$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");
});

// $("ul li").click(function(){
//    $(this).toggleClass("completed1");
// });

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function(){
        //below this refer to the li not the span
        $(this).remove();
    });
    console.log(nabin)
    // event.stopPropagation method stope other elemenet for bubling up
    event.stopPropagation();
});

// for input 
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
      //grabbing new todo text form input
      var todoText = $(this).val();
      $(this).val("");
      // crerate a new li and add to ul
      $("ul").append("<li><span><i class='fas fa-times'></i></span> " + todoText + "</li>");
       console.log(todoText);
    }
});

// toggle button 
$("#toggle-form").click(function() {
    $("input[type='text']").fadeToggle();
});

