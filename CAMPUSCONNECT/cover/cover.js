const params = new URLSearchParams(window.location.search);
const userType = params.get("type");

if (userType) {
  document.querySelector(".welcome-message h1").textContent = 
    `Welcome ${userType.charAt(0).toUpperCase() + userType.slice(1)} to CampusConnect`;
}
