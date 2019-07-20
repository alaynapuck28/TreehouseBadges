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
  let date = Date.parse(badges.badges.earned_date);

  document.getElementById("badges").innerHTML = badges.badges
    .map((badges, index) => {
      return `<div class="badge">
      <h4>${badges.name} </h4>

         <img id="badge-image" src="${badges.icon_url}" alt="image of ${
        badges.name
      }">
        <p>Date Completed:</p>
        <p>${badges.earned_date}</p>
         </div>`;
    })
    .join(" ");
}
