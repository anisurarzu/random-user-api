const loadUser = async () => {
  const url = "https://randomuser.me/api/?results=50";
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results[0]);
  } catch (error) {
    console.log("something wrong here");
  }
  // .then((res) => res.json())
  // .then((data) => displayUser(data.results[0]));
};

const displayUser = (user) => {
  console.log(user);
  const displayUser = document.getElementById("display-user");
  displayUser.textContent = "";
  const div = document.createElement("div");

  div.innerHTML = `<img class="img" src="${user.picture.large}">
    <p>Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
 <p>City: ${user.location.city}</p>
 <p>Street-Number: ${user.location.street.number}</p>

 <p>Timezone: ${user.registered.date}</p>
  `;
  displayUser.appendChild(div);

  //
};

// document.getElementById("details").addEventListener("click", (e) => {});

// loading js
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});
