// import type { ProductModel } from "@/models/ProductModel";
// import type { InjectionKey } from "vue";
// import { createStore, Store } from "vuex";

import type { ProductModel } from "@/models/ProductModel";
import { ref } from "vue";

// export interface State {
//   products: ProductModel[];
// }

// const state: State = {
//   products: [
//     {
//       Id: "1",
//       Name: "Leche",
//       Stock: 50,
//       ExpiryDate: "2024-06-30T00:00:00",
//       Category: "Lácteos",
//     },
//     {
//       Id: "2",
//       Name: "Pan",
//       Stock: 100,
//       ExpiryDate: "2024-06-15T00:00:00",
//       Category: "Panadería",
//     },
//     {
//       Id: "3",
//       Name: "Manzana",
//       Stock: 200,
//       ExpiryDate: "2024-07-10T00:00:00",
//       Category: "Frutas",
//     },
//     {
//       Id: "4",
//       Name: "Jugo de Naranja",
//       Stock: 75,
//       ExpiryDate: "2024-08-01T00:00:00",
//       Category: "Bebidas",
//     },
//     {
//       Id: "5",
//       Name: "Yogur",
//       Stock: 60,
//       ExpiryDate: "2024-07-20T00:00:00",
//       Category: "Lácteos",
//     },
//   ],
// };

// export const key: InjectionKey<Store<State>> = Symbol();

// export const store = createStore<State>({
//   state: state,
//   // mutations: {
//   //   addProduct(state: any, product: ProductModel) {
//   //     state.products.push(product);
//   //   },
//   // },
//   // actions: {
//   //   // Define acciones si es necesario
//   // },
//   // getters: {
//   //   // Define getters si es necesario
//   // },
// });

export const products = ref<ProductModel[]>([
  {
    Id: "1",
    Name: "Leche",
    Stock: 50,
    ExpiryDate: new Date("2024-06-30T00:00:00"),
    Category: "Lácteos",
  },
  {
    Id: "2",
    Name: "Pan",
    Stock: 100,
    ExpiryDate: new Date("2024-06-15T00:00:00"),
    Category: "Panadería",
  },
  {
    Id: "3",
    Name: "Manzana",
    Stock: 200,
    ExpiryDate: new Date("2024-07-10T00:00:00"),
    Category: "Frutas",
  },
  {
    Id: "4",
    Name: "Jugo de Naranja",
    Stock: 75,
    ExpiryDate: new Date("2024-08-01T00:00:00"),
    Category: "Bebidas",
  },
  {
    Id: "5",
    Name: "Yogur",
    Stock: 60,
    ExpiryDate: new Date("2024-07-20T00:00:00"),
    Category: "Lácteos",
  },
]);
