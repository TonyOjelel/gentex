var baseUrl = "http://localhost:3000/api/auth/";

document
  .getElementById("submit")
  .addEventListener("click", function (click) {
    login(click);
  });

async function login(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    const response = await fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.status == 200) {
      alert(data.message); // change to toast
      setTimeout(function () {
        location.href = "/ui/products/producelistings.html";
      }, 500);
    }
  } catch (error) {
    console.log(error);
  }
}
