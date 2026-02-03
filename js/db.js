function loadDB() {
  return JSON.parse(localStorage.getItem("db")) || { tickets: [] };
}

function saveDB(db) {
  localStorage.setItem("db", JSON.stringify(db));
}
