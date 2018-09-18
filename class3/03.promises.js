Promise.resolve("OK!")
  .then((msg) => {
    console.log(msg);
    return "Joya!";
  })
  .then((msg) => {
    console.log(msg);
  });

Promise.reject("ERROR!")
  .catch((msg) => {
    console.log(msg);
    return "No problem!";
  })
  .then((msg) => {
    console.log(msg);
  });


/* ------------------------------------------------- */


function obtenerSemilla() {
  return Promise.resolve("obtenerSemilla OK");
}

function germinarSemilla(msg) {
  console.log(msg);
  return Promise.resolve("germinarSemilla OK");
}

function plantarSemillaGerminada(msg) {
  console.log(msg);
  return Promise.resolve("plantarSemillaGerminada OK");
}

function regarTierra(msg) {
  console.log(msg);
  return Promise.resolve("regarTierra OK");
}

function cosecharFrutos(msg) {
  console.log(msg);
  // Esta función no devuelve una Promise, si no directamente un valor
  const prob = Math.floor((Math.random() * 10)); // 0..10
  if (prob <= 2) {
    throw new Error("Se honguearon :(");
  } else {
    return {
      especie: "Tomate",
      variedad: "Redondo",
      cantidad: 30
    };
  }
}

function huerta() {
  return obtenerSemilla()
    .then((valorDevueltoPorObtenerSemilla) => {
      return germinarSemilla(valorDevueltoPorObtenerSemilla);
    })
    .then(plantarSemillaGerminada)
    .then(regarTierra)
    .then(cosecharFrutos)
    .then((res) => {
      console.log("Este mensaje solo aparecerá si 'cosecharFrutos' fue OK!");
      return res; // Retornamos 'res' para que llegue al 'mundo exterior'
    });
}

function ejecutar() {
  const miHuerta = huerta();
  console.log("--------------------------------------");
  console.log("Antes de evaluar por fulfilled (then): ", miHuerta);

  miHuerta
    .then((res) => {
      console.log("Mi huerta dió: ", res);
    })
    .catch((err) => {
      console.error("Error: ", err.message);
    });
}

setTimeout(ejecutar, 1000);