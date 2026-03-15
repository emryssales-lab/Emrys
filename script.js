/*
  Global site script for Emry's Locksmithing.
  Update the Google Business Profile URL below when ready.
*/
const BUSINESS_PROFILE_URL = "https://www.google.com/maps/search/?api=1&query=Emry%27s+Locksmithing+Williston+ND"; // Google Business Profile / Maps listing link.

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const gbpLinks = document.querySelectorAll("[data-gbp-link]");
gbpLinks.forEach((link) => {
  link.setAttribute("href", BUSINESS_PROFILE_URL);
});


const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value?.trim() || "";
    const phone = document.getElementById("phone")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const message = document.getElementById("message")?.value?.trim() || "";

    const subject = encodeURIComponent("New Emry's Locksmithing Website Lead");
    const body = encodeURIComponent(
      `Name: ${name}
Phone: ${phone}
Email: ${email || "N/A"}

Service Request:
${message}`
    );

    window.location.href = `mailto:emryslocksmithing701@gmail.com?subject=${subject}&body=${body}`;
  });
}
