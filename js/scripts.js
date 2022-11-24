$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault()
    const answer1 = $("#input1").val()
    const answer2 = $("#input2").val()
    const answer3 = $("#input3").val()
    const answer4 = $("#input4").val()
    const answer5 = $("#input5").val()
    const answer6 = $("#input6").val()
    const answer7 = $("#input7").val()
    const answer8 = $("#input8").val()

    if ((answer1 === "yes") && (answer2 === "yes") && (answer3 === "no") && (answer4 === "yes")
      && (answer5 === "yes") && (answer6 === "no") && (answer7 === "no") &&(answer8==="no")) {
      $("#character").text("Michael Scofield")
      $(".image1").show()
    }
    else if ((answer1 === "yes") && (answer2 === "yes") && (answer3 === "yes") && (answer4 === "no")
      && (answer5 === "yes") && (answer6 === "no") && (answer7 === "no") &&(answer8==="no")) {
      $("#character").text("Lincoln Burrows")
      $(".image2").show()

    }
    else if ((answer1 === "yes") && (answer2 === "no") && (answer3 === "no") && (answer4 === "no")
      && (answer5 === "no") && (answer6 === "yes") && (answer7 === "no") &&(answer8==="no")) {
      $("#character").text("Fernando Sucre")
      $(".image3").show()
    }
    else if ((answer1 === "no") && (answer2 === "no") && (answer3 === "no") && (answer4 === "no")
      && (answer5 === "yes") && (answer6 === "no") && (answer7 === "yes") &&(answer8==="no")) {
      $("#character").text("Sara Tencredi")
      $(".image4").show()
    }
    else if ((answer1 === "yes") && (answer2 === "no") && (answer3 === "no") && (answer4 === "no")
      && (answer5 === "yes") && (answer6 === "no") && (answer7 === "no") &&(answer8==="yes")) {
      $("#character").text("Theodore Bagwell")
      $(".image5").show()
    }
    else if ((answer1 === "yes") && (answer2 === "yes") && (answer3 === "yes") && (answer4 === "yes")
      && (answer5 === "yes") && (answer6 === "yes") && (answer7 === "yes") &&(answer8==="yes")) {
      $("#character").text("Sorry! there's no match")
    }
    else if ((answer1 === "no") && (answer2 === "no") && (answer3 === "no") && (answer4 === "no")
      && (answer5 === "no") && (answer6 === "no") && (answer7 === "no") &&(answer8==="no")) {
      $("#character").text("Sorry! there's no match")
    }
    else if ((answer1 === "yes") && (answer2 === "no") && (answer3 === "no") && (answer4 === "no")
      && (answer5 === "yes") && (answer6 === "no") && (answer7 === "no") &&(answer8==="no")) {
      $("#character").text("Sorry! there's no match")
    }
  })
})