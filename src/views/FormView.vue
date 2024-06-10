<template>
  <main>
    <div class="container my-4">
      <h1 class="mb-4">{{ isEditing ? 'Editar Producto' : 'Agregar Producto' }}</h1>
      <form @submit.prevent="saveProduct">
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" v-model="currentProduct.Name" autocomplete="off" required>
        </div>
        <div class="mb-3">
          <label for="stock" class="form-label">Stock</label>
          <input type="number" class="form-control" id="stock" v-model="currentProduct.Stock" autocomplete="off" required>
        </div>
        <div class="mb-3">
          <label for="expiryDate" class="form-label">Fecha de Expiración</label>
          <input type="date" class="form-control" id="expiryDate" v-model="formattedExpiryDate" required>
        </div>
        <div class="mb-3">
          <label for="category" class="form-label">Categoría</label>
          <input type="text" class="form-control" id="category" v-model="currentProduct.Category" autocomplete="off" required>
        </div>
        <button type="submit" class="btn btn-primary">{{ isEditing ? 'Guardar Cambios' : 'Agregar Producto' }}</button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { products } from '@/store/store';
import { useRoute, useRouter } from 'vue-router';
import type { ProductModel } from '@/models/ProductModel';

const router = useRouter();
const route = useRoute();
const isEditing = ref(false);

const currentProduct = ref<ProductModel>({
  Id: "",
  Name: "",
  Stock: 0,
  ExpiryDate: new Date(),
  Category: "",
});

const formattedExpiryDate = computed({
  get: () => {
    return currentProduct.value.ExpiryDate
      ? new Date(currentProduct.value.ExpiryDate).toISOString().split('T')[0]
      : '';
  },
  set: (value: string) => {
    currentProduct.value.ExpiryDate = new Date(value);
  },
});

onMounted(() => {
  const id = route.params.id as string | undefined;
  if (id) {
    const productToEdit = products.value.find(p => p.Id === id);
    if (productToEdit) {
      currentProduct.value = { ...productToEdit };
      isEditing.value = true;
    }
  } else {
    currentProduct.value = {
      Id: `${products.value.length + 1}`,
      Name: "",
      Stock: 0,
      ExpiryDate: new Date(),
      Category: "",
    };
  }
});

const saveProduct = () => {
  if (isEditing.value) {
    const index = products.value.findIndex(p => p.Id === currentProduct.value.Id);
    if (index !== -1) {
      products.value[index] = { ...currentProduct.value };
    }
  } else {
    products.value.push({ ...currentProduct.value });
  }
  router.push('/');
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
