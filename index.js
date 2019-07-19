window.onload = function() {
  fetch("https://teamtreehouse.com/alaynapuckett.json").then(response =>
    response
      .json()

      .then(data => {
        showBadges(data);
      })
      .catch(err => {
        // Do something for an error here
      })
  );
};

function showBadges(badges) {
  document.getElementById("badges").innerHTML = badges.badges
    .map((badges, index) => {
      return `<p>${badges.name} </p>

         <img id="badge-image" src="${badges.icon_url}" alt="image of ${
        badges.name
      }">
         <p>${badges.earned_date}</p>`;
    })
    .join(" ");
}
