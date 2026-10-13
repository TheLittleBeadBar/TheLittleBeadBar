document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px";
    nav.style.background = "#fffaf4";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "stretch";
  }
});

document.getElementById("bookingForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent("The Little Bead Bar Event Inquiry");
  const body = encodeURIComponent(
`Hi The Little Bead Bar!

Name: ${data.get("name")}
Email: ${data.get("email")}
Event type: ${data.get("event")}
Approx. children: ${data.get("guests")}
Event date: ${data.get("date")}

Event details:
${data.get("message")}`
  );
  // CHANGE THIS EMAIL ADDRESS BEFORE PUBLISHING:
  window.location.href = `mailto:TheLittleBeadBar@protonmail.com?subject=${subject}&body=${body}`;
});
