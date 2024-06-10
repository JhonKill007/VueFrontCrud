<template>
    <ProductsGrid :products="products" />
</template>

<script setup lang="ts">
import ProductsGrid from "../components/ProductsGrid.vue";
import { products } from "@/store/store";
</script>
