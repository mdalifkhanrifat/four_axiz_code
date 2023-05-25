// Document is ready
$(document).ready(function () {
  // Validate Name
  $("#usercheck").hide();
  let nameError = true;
  $("#names").keyup(function () {
    validateName();
  });

  function validateName() {
    let nameValue = $("#names").val();
    if (nameValue.length == "") {
      $("#usercheck").show();
      nameError = false;
      return false;
    } else if (nameValue.length < 4 ) {
      $("#usercheck").show();
      $("#usercheck").html("length of Name must be between 5 ");
      nameError = false;
      return false;
    } else {
      $("#usercheck").hide();
    }
  }

  // Validate Email
  const email = document.getElementById("email");
  email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){3}$/;
    let s = email.value;
    if (regex.test(s)) {
      email.classList.remove("is-invalid");
      emailError = true;
    } else {
      email.classList.add("is-invalid");
      emailError = false;
    }
  });

  // Validate Password
  $("#passcheck").hide();
  let passwordError = true;
  $("#password").keyup(function () {
    validatePassword();
  });
  function validatePassword() {
    let passwordValue = $("#password").val();
    if (passwordValue.length == "") {
      $("#passcheck").show();
      passwordError = false;
      return false;
    }
    if (passwordValue.length < 6 || passwordValue.length > 32) {
      $("#passcheck").show();
      $("#passcheck").html(
        "length of your password must be between 6 and 32"
      );
      $("#passcheck").css("color", "#577860");
      passwordError = false;
      return false;
    } else {
      $("#passcheck").hide();
    }
  }

  // Validate Confirm Password
  $("#conpasscheck").hide();
  let confirmPasswordError = true;
  $("#conpassword").keyup(function () {
    validateConfirmPassword();
  });
  function validateConfirmPassword() {
    let confirmPasswordValue = $("#conpassword").val();
    let passwordValue = $("#password").val();
    if (passwordValue != confirmPasswordValue) {
      $("#conpasscheck").show();
      $("#conpasscheck").html("Password didn't Match");
      $("#conpasscheck").css("color", "#577860");
      confirmPasswordError = false;
      return false;
    } else {
      $("#conpasscheck").hide();
    }
  }

  // Submit button
  $("#submitbtn").click(function () {
    validateName();
    validatePassword();
    validateConfirmPassword();
    validateEmail();
    if (
      nameError == true &&
      passwordError == true &&
      confirmPasswordError == true &&
      emailError == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});
