// Login
const form_login = document.getElementById("form_login");

form_login.onsubmit = async (e) => {
  e.preventDefault();

  document.querySelector("#form_login button").disabled = true;
  document.querySelector(
    "#form_login button"
  ).innerHTML = `<div class="spinner-border me-2" role="status">
                        </div>
                        <span>Loading...</span>`;

  const formData = new FormData(form_login);

  const response = await fetch("http://webapp-backend.test/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  let data;

  if (response.ok) {
    data = await response.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role);

    window.location.pathname = "/index.html";
  } else {
    data = await response.json();
    throw new Error(data.message);
  }
};
