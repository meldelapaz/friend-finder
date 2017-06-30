//When the page loads, "page ready" will be console logged
$(document).ready(function() {
    console.log("page ready");
})

    // When the submit button on the form is clicked...
    $('#submitbtn').on('click', function(e) {
        console.log("Submit button clicked");

        e.preventDefault();

        var input = [];

        var pushAnswers = {
            name: $('#name').val(),
            image: $('#photo').val(),
            q1:  $('input[name=q1]:checked').val(),
            q2:  $('input[name=q2]:checked').val(),
            q3:  $('input[name=q3]:checked').val(),
            q4:  $('input[name=q4]:checked').val(),
            q5:  $('input[name=q5]:checked').val(),
            q6:  $('input[name=q6]:checked').val(),
            q7:  $('input[name=q7]:checked').val(),
            q8:  $('input[name=q8]:checked').val(),
            q9:  $('input[name=q9]:checked').val(),
            q10: $('input[name=q10]:checked').val(),
        };

        console.log(pushAnswers);

        $.post("/api/animals", pushAnswers, function(data) {
            console.log(data.name);
            console.log(data.photo);

            $("#matchedAnimal").html("<h3>" + data.name + "</h3> <br> <img src=" + data.photo + "</img>");
            $('#animalPopUp').modal("show")
        });

});