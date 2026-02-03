const params = new URLSearchParams(location.search);
const order = params.get("order");
const db = loadDB();

const container = document.getElementById("tickets");

db.tickets.filter(t => t.orderId === order).forEach(t => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h2>INVITADO ESPECIAL</h2><p>${t.name}</p><div id="${t.id}"></div>`;
  container.appendChild(div);
  new QRCode(document.getElementById(t.id), t.id);
});
