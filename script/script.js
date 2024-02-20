const allSeats = document.getElementsByClassName("seat");

for (const seat of allSeats) {
  seat.addEventListener("click", function (event) {
    const seatName = event.target.innerText;
    console.log(seatName);
    const selectedContainer = document.getElementById(
      "selected-seat-container"
    );

    if (getValueById("seats") > 3) {
      alert("You Have Already Selected Maximum Number of Seats");
      return;
    }
    event.target.style.backgroundColor = "orange";

    const div = document.createElement("div");
    div.classList.add("selected-seats");
    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("gap-1");
    const tag1 = document.createElement("p");
    const tag2 = document.createElement("p");
    const tag3 = document.createElement("p");

    tag1.innerText = seatName;
    tag2.innerText = "Economy";
    tag3.innerText = 550;

    div.appendChild(tag1);
    div.appendChild(tag2);
    div.appendChild(tag3);

    selectedContainer.appendChild(div);
    const price = tag3.innerText;
    updateTotalCost(price);
    updateSeatCount();
    updateLeftSeat();
    updateGrandTotal();
  });
}

// Called function activities--->>

function updateTotalCost(price) {
  const previousTotal = document.getElementById("total-cost").innerText;
  const convertedTotal = parseInt(previousTotal);
  const convertedPrice = parseInt(price);
  const sum = convertedTotal + convertedPrice;
  document.getElementById("total-cost").innerText = sum;
}

function updateSeatCount() {
  const defaultSeatCount = document.getElementById("seats").innerText;
  const convertedDefaultSeatCount = parseInt(defaultSeatCount);
  document.getElementById("seats").innerText = convertedDefaultSeatCount + 1;
}

function getValueById(id) {
  const targetElement = document.getElementById(id).innerText;
  return parseInt(targetElement);
}

function updateLeftSeat() {
  const defaultLeft = document.getElementById("left").innerText;
  const convertDefaultLeft = parseInt(defaultLeft);
  document.getElementById("left").innerText = convertDefaultLeft - 1;
}

function updateGrandTotal(control) {
  const previousTotal = document.getElementById("total-cost").innerText;
  const convertedTotal = parseInt(previousTotal);
  const couponCode = document.getElementById("coupon-code").value;
  if (control) {
    if (couponCode == "NEW15") {
      const discount = convertedTotal * 0.15;
      document.getElementById("grand-total").innerText =
        convertedTotal - discount;
    } else if (couponCode == "Couple 20") {
      const discount = convertedTotal * 0.2;
      document.getElementById("grand-total").innerText =
        convertedTotal - discount;
    } else {
      alert("Invalid Coupon Code , No Discount");
      return;
    }
  } else {
    document.getElementById("grand-total").innerText = convertedTotal;
}
}

// Submission Message





function submission(control) {
  if (control) {
    alert('Your Seats are Booked Successfully');
  } else {
    ("Try Again");
  }
}