// Inventory.vue
<template>
    <div>
        <h2 class="font-semibold text-slate-800 dark:text-slate-100">Inventory</h2>
        <table class="table-auto mt-4">
            <thead>
                <tr>
                    <th class="px-4 py-2">ID</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Price</th>
                    <th class="px-4 py-2">Category</th>
                    <th class="px-4 py-2">Inventory Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td class="border px-4 py-2">{{ product.id }}</td>
                    <td class="border px-4 py-2">{{ product.name }}</td>
                    <td class="border px-4 py-2">{{ product.price }}</td>
                    <td class="border px-4 py-2">{{ product.category }}</td>
                    <td class="border px-4 py-2">{{ product.inventoryStatus }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    computed: {
        products() {
            return this.$store.getters.getProducts;
        },
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
};
</script>
