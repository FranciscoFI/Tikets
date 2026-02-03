let scanner;

function start() {
  scanner = new Html5Qrcode("reader");

  scanner.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 800 },
    code => {
      const db = loadDB();
      const ticket = db.tickets.find(t => t.id === code);

      if (!ticket) return status("❌ QR inválido");
      if (ticket.used) return status("⚠️ Ya usado");

      ticket.used = true;
      saveDB(db);
      status("✅ Acceso permitido");
    }
  );
}

function status(msg) {
  document.getElementById("status").innerText = msg;
}


