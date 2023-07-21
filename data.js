const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// EJERCICIO A - IMPRIMIENDO LAS PIZZAS QUE TIENEN UN ID IMPAR
const pizzaImpares = pizzas.filter((pizzas) => {
  return pizzas.id % 2 === 1;
});

pizzaImpares.forEach((pizzas) => {
  const { nombre } = pizzas;
  console.log(`Las pizzas son:${nombre}.`);
});

console.log("-----------------------------------");

// EJERCICIO B - ¿HAY ALGUNA PIZZA QUE VALGA MENOS DE 600$?

const filtralPizzas = pizzas.filter((pizzas) => pizzas.precio < 600);

filtralPizzas.forEach((pizzas) => {
  const pizzasFiltrada = `contamos con pizza que sale menos de 600$. esta es: ${pizzas.nombre}, y el precio es de $${pizzas.precio}.`;
  console.log(pizzasFiltrada);
});

console.log("-----------------------------------");

// Ejercicio c - IMPRIMIR NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO.

const pizzasConSusPrecios = pizzas.map((pizzas) => {
  return {
    ...pizzas,
    precio: pizzas.precio,
  };
});
pizzasConSusPrecios.forEach((pizzas) => {
  const pizzasFiltrada = `Las pizzas con las contamos son ${pizzas.nombre} y el precio de estas es de: $${pizzas.precio}.`;
  console.log(pizzasFiltrada);
});

console.log("-----------------------------------");

// EJERCICIO D - Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];
  console.log(`Ingredientes de la ${pizza.nombre}: ${pizza.ingredientes}`);
}
