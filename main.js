document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    /* traitement */
    document.querySelector("form").reset();
  });
});
