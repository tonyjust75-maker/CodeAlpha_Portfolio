function handleFormSubmit(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  event.target.reset();
}