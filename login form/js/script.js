  const infoButton = document.getElementById("infoButton");
  const inputField = document.getElementById("inputField");

  infoButton.addEventListener("click", () => {
    const inputValue = inputField.value.trim(); 

    if (inputValue === "") {
      Swal.fire({
        title: "Error",
        text: "Please enter a value in the input field.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Welcome",
        text: "You entered: " + inputValue,
        icon: "Success",
        confirmButtonText: "OK",
      });
    }
  });
