function buy() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const qty = +document.getElementById("qty").value;

  const db = loadDB();
  const orderId = crypto.randomUUID();

  for (let i = 0; i < qty; i++) {
    db.tickets.push({
      id: crypto.randomUUID(),
      orderId,
      name,
      email,
      used: false
    });
  }

  saveDB(db);
  location.href = "tickets.html?order=" + orderId;
}
