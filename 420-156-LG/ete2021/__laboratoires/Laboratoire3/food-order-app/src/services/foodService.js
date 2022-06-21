const CATEGORIES = [
  {
    id: 1,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1014&q=80",
  },
  {
    id: 2,
    name: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    id: 3,
    name: "Sushi",
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2990&q=80",
  },
  {
    id: 4,
    name: "Healthy food",
    image:
      "https://images.unsplash.com/photo-1591120583691-49d2741e55da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80",
  },
];

const MEALS = [
  {
    id: 1,
    categoryId: 1,
    name: "PROSCIUTTO & ARUGULA",
    image:
      "https://storage.pizzapizza.ca/phx2/ppl_images/products/en/2x/13992.png",
    price: 11.99,
    isPopular: true,
  },
  {
    id: 2,
    categoryId: 1,
    name: "PEPPERONI",
    image:
      "https://storage.pizzapizza.ca/phx2/ppl_images/products/en/2x/Pepperoni.png",
    price: 9.49,
  },
  {
    id: 3,
    categoryId: 1,
    name: "TROPICAL HAWAIIAN",
    image:
      "https://storage.pizzapizza.ca/phx2/ppl_images/products/en/2x/12700.png",
    price: 13.49,
  },
  {
    id: 4,
    categoryId: 1,
    name: "SPICY BBQ CHICKEN",
    image:
      "https://storage.pizzapizza.ca/phx2/ppl_images/products/en/2x/bbqchicken.png?cache_key=18",
    price: 14.49,
  },
  {
    id: 5,
    categoryId: 2,
    name: "Le gros gourmand",
    image:
      "https://d1ralsognjng37.cloudfront.net/8fc56f2f-12f3-4f0f-9e31-f022a3267b5c.jpeg",
    price: 18.95,
  },
  {
    id: 6,
    categoryId: 2,
    name: "J'me trompe pas avec ça",
    image:
      "https://d1ralsognjng37.cloudfront.net/f9a0665e-e048-428f-8f74-162365e6a253.jpeg",
    price: 18.95,
    isPopular: true,
  },
  {
    id: 7,
    categoryId: 2,
    name: "Brunch",
    image:
      "https://d1ralsognjng37.cloudfront.net/bdf5f603-f2a8-4b73-b927-93f0140b7079.jpeg",
    price: 19.45,
  },
  {
    id: 8,
    categoryId: 2,
    name: "Le tout des tout",
    image:
      "https://d1ralsognjng37.cloudfront.net/ae33c706-01e4-48dd-81e0-b36885ca1468.jpeg",
    price: 20.4,
  },
  {
    id: 9,
    categoryId: 3,
    name: "Deluxe Platter",
    image:
      "https://d1ralsognjng37.cloudfront.net/5cbbacb5-a6ec-47dd-af85-d5510d4b10c7.jpeg",
    price: 78,
  },
  {
    id: 10,
    categoryId: 3,
    name: "Maki Ebi",
    image:
      "https://d1ralsognjng37.cloudfront.net/086342f9-61cc-4b55-b55e-ad7fc42d7c34.png",
    price: 7.19,
    isPopular: true,
  },
  {
    id: 11,
    categoryId: 3,
    name: "Salmon Kamikaze Sumomaki",
    image:
      "https://d1ralsognjng37.cloudfront.net/f6d8a7da-47c3-4820-8407-7147a6ccd36a.jpeg",
    price: 7.99,
  },
  {
    id: 12,
    categoryId: 4,
    name: "Wrap au Thon / Tuna Wrap",
    image:
      "https://d1ralsognjng37.cloudfront.net/b1d45c38-401c-4491-864f-8963213dd1e4.jpeg",
    price: 8.49,
  },
  {
    id: 13,
    categoryId: 4,
    name: "Fusillis",
    image:
      "https://d1ralsognjng37.cloudfront.net/42197621-5772-41bf-ab3f-b6476e0d528f.jpeg",
    price: 5.49,
  },
  {
    id: 14,
    categoryId: 4,
    name: "Cesar",
    image:
      "https://d1ralsognjng37.cloudfront.net/8a49d364-2796-42ba-bf29-32f81678aafa.jpeg",
    price: 5.49,
  },
  {
    id: 15,
    categoryId: 4,
    name: "Blizt kit",
    image:
      "https://d1ralsognjng37.cloudfront.net/a4dae6bd-b56b-4115-b6b4-4c74be1086da.jpeg",
    price: 55.25,
    isPopular: true,
  },
];

export function getCategories() {
  return CATEGORIES;
}

export function getMeals() {
  return MEALS;
}
