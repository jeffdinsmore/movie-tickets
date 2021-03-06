// Business Logic

function Ticket(age, time, movieType) {
  this.age = age,
  this.time = time,
  this.movieType = movieType,
  this.price = 14
}

Ticket.prototype.ticketPrice = function() {
  
    if (this.age >= 60 && this.time === "matinee" && this.movieType === "non-regular") {
      this.price -= 6;
    } else if (this.age >= 60 && this.time === "matinee" || this.age >= 60 && this.movieType === "non-regular" || this.time === "matinee" && this.movieType === "non-regular") {
      this.price -= 4;
    } else if (this.age >= 60 || this.time === "matinee" || this.movieType === "non-regular" ) {
      this.price -= 2;
    } else {
      this.price = this.price;
    }
    return this.price;
  };


// User Interface Logic
let ticket = new Ticket();

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const ageInput = parseInt($("#age").val());
    const timeInput = $("#time").val();
    const movieTypeInput = $("#movieType").val();
    let ticket = new Ticket(ageInput, timeInput, movieTypeInput);
    let ticketValues = Object.values(ticket);
    let finalPriceTicket = ticket.ticketPrice(ticketValues);
    $("#result").text("$" + finalPriceTicket);
  });  
});