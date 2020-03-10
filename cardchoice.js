//not sure how to go about the interaction where you click and see the card shift down a little bit

// from https://www.sitepoint.com/community/t/moving-an-image-using-javascript/12507

/* NOTE:
  Array to store every clickable card */
var cardContainerElements = [];

/* NOTE:
  We need to wait until the page is fully loaded to attach functionality to the cards */

document.addEventListener("DOMContentLoaded", () => {

  /* NOTE:
  Get every card on the page and attack the "click" listener */
  cardContainerElements = document.getElementsByClassName("cardContainer");

  console.log("Found " + cardContainerElements.length + " card containers.");
  for (var i = 0; i < cardContainerElements.length; i++) {
    cardContainerElements[i].addEventListener("click", function() {
      /* NOTE:
      event.target is the element we clicked */
      console.log(event.target);
      offsetCard(event.target);
    });
  }
});

function offsetCard(cardElement) {
  /* NOTE:
  The "cardElement" is the div that was clicked */
  cardElement.style.marginTop = "25px";
}
