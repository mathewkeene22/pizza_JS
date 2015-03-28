var Pizza = {
  size: "",
  topping: "",
  price : function() {
//small
  if (this.size === 10 && this.topping === "cheese" ) {
    return 10
  } else if ( this.size === 10 && this.topping === "pepperoni" ) {
    return 12
//medium
  } else if ( this.size === 14 && this.topping === "cheese" ) {
    return 13
  } else if ( this.size === 14 && this.topping === "pepperoni" ) {
    return 15
//large
  } else if ( this.size === 18 && this.topping === "cheese" ) {
    return 16
  } else if ( this.size === 18 && this.topping === "pepperoni" ) {
    return 18
  }
  }
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var newOrder = Object.create(Pizza)
    var newSize = parseInt($("#new-size").val());
    var newTopping = $("#topping").val();

    newOrder.size = newSize;
    newOrder.topping = newTopping;
    var totalCost = newOrder.price();
    $(".total").text(totalCost);
  })
})
