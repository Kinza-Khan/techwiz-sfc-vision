$(document).ready(function () {
  // Load events from JSON
  $.getJSON("events.json", function (data) {
    let eventHTML = "";
    $.each(data, function (i, event) {
      eventHTML += `
        <div class="event-card item">
          <img src="${event.image}" alt="${event.title}">
          <h3>${event.title}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p>${event.description}</p>
          <button>Learn More</button>
        </div>
      `;
    });

    // Inject cards into carousel
    $("#event-carousel").html(eventHTML);

    // Initialize Owl Carousel
    $("#event-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
  });
});


  // Smooth scroll for nav links
  $(".nav-links a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      $("html, body").animate(
        { scrollTop: $(this.hash).offset().top - 60 },
        700
      );
    }
  });



// welcome 
// home.html ke <script> tag me add karein
const params = new URLSearchParams(window.location.search);
const userType = params.get("type");

if (userType) {
  console.log(userType);
  document.querySelector(".tagline").textContent =
    `Welcome ${userType.charAt(0).toUpperCase() + userType.slice(1)} 👋`;
}





// banner
