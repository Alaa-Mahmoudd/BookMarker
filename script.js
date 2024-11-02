const form = document.querySelector("#bookmarkForm");
const bookmarksList = document.querySelector("#bookmarksList");

let bookmarkCount = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const siteName = document.querySelector("#siteName").value;
  const siteUrl = document.querySelector("#siteUrl").value;

  if (siteName.trim() === "" || siteName.length < 3) {
    window.alert("Write a Valid Site Name");
    return;
  } else if (siteUrl.trim() === "" || siteUrl.length < 3) {
    window.alert("Write a Valid Site URL");
    return;
  }

  bookmarkCount++;
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${bookmarkCount}</td>
    <td>${siteName}</td>
    <td> <a href="${siteUrl}" target="_blank" class="btn-visit">Visit</a></td>
    <td><button class="btn-delete">Delete</button></td>
  `;
  bookmarksList.appendChild(row);

  form.reset();

  const deleteButton = row.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    row.remove();
    bookmarkCount--;
    updateIndex();
  });
});

function updateIndex() {
  const rows = bookmarksList.querySelectorAll("tr");
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
}
