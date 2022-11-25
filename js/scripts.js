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
      $("#character").text("Michael Scofield(Wentworth Miller)")
      $(".image1").show()
      $(".image2").hide()
      $(".image3").hide()
      $(".image4").hide()
      $(".image5").hide()
    }

    else if ((answer1 === "yes") && (answer2 === "yes") && (answer3 === "yes") && (answer4 === "no")
      && (answer5 === "yes") && (answer6 === "no") && (answer7 === "no") &&(answer8==="no")) {
      $("#character").text("Lincoln Burrows(Dominic Purcell)")
      $(".image2").show()
      $(".image1").hide()
      $(".image3").hide()
      $(".image4").hide()
      $(".image5").hide()
    }

    else if ((answer1 === "yes") && (answer2 === "no") && (answer3 === "no") && (answer4 === "no")
      && (answer5 === "no") && (answer6 === "yes") && (answer7 === "no") &&(answer8==="no")) {
      $("#character").text("Fernando Sucre(Amaury Nolasco)")
      $(".image3").show()
      $(".image2").hide()
      $(".image1").hide()
      $(".image4").hide()
      $(".image5").hide()
    }

    else if ((answer1 === "no") && (answer2 === "no") && (answer3 === "no") && (answer4 === "no")
      && (answer5 === "yes") && (answer6 === "no") && (answer7 === "yes") &&(answer8==="no")) {
      $("#character").text("Sara Tencredi(Sarah Wayne Callies)")
      $(".image4").show()
      $(".image2").hide()
      $(".image3").hide()
      $(".image1").hide()
      $(".image5").hide()
    }

    else if ((answer1 === "yes") && (answer2 === "no") && (answer3 === "no") && (answer4 === "no")
      && (answer5 === "yes") && (answer6 === "no") && (answer7 === "no") &&(answer8==="yes")) {
      $("#character").text("Theodore Bagwell(Robert Knepper)")
      $(".image5").show()
      $(".image2").hide()
      $(".image3").hide()
      $(".image4").hide()
      $(".image1").hide()
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

    else if((answer5===answer6) || (answer7===answer8)){
      $("#character").text("Sorry! there's no match")
    }

    else if ((answer1 === "yes") && (answer2 === "no") && (answer3 === "yes") && (answer4 === "no")
      && (answer5 === "yes") && (answer6 === "no") && (answer7 === "yes") &&(answer8==="no")) {
      $("#character").text("Sorry! there's no match")
    }

  })
})