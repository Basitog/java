$(document).ready(function() {
  $("#letterOne").submit(function(event) {
    event.preventDefault();
    const streetInput = $("input#street").val();
    const cityInput = $("input#city").val();
    const stateInput= $("input#state").val();
    const dateInput = $("input#date").val();
    const street1Input = $("input#street1").val();
    const city1Input = $("input#city1").val();
    const state1Input= $("input#state1").val();
    const salutationInput =$("input#salutation").val();
    const complimentInput=$("input#compliment").val();
    const usernameInput=$("input#username").val();
    // const titleInput=$("input#title").val();

    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".date").text(dateInput);
    $(".street1").text(street1Input);
    $(".city1").text(city1Input);
    $(".state1").text(state1Input);
    $(".salutation").text(salutationInput);
    $(".username").text(usernameInput);
    $(".compliment").text(complimentInput);
    // $(".title").text(titleInput);
    // $("#formal").show();
    // $("#dd").show();
    $("#dd").show();

    $("#we").click(function(){
     $("#letterOne").hide();
     $("#formal").fadeToggle(930);

    })
  }); 
});
               