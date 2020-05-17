const emailForm = document.querySelector("#email-form");
const formConfirmation = document.querySelector("#form-confirmation");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = emailForm.clientHeight;
  formConfirmation.style.height = height + "px";
  emailForm.setAttribute("form-submitted", "");
  formConfirmation.setAttribute("form-submitted", "");
});

const CRYear = document.querySelector("#cr-year");
const date = new Date().getFullYear();
CRYear.innerHTML = date;
