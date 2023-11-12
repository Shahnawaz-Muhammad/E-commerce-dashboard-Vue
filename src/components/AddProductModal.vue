

<template>
    <!-- Modal backdrop -->
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition ease-out duration-100" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-show="modalOpen" class="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity" aria-hidden="true">
        </div>
    </transition>
    <!-- Modal dialog -->
    <transition enter-active-class="transition ease-in-out duration-200" enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in-out duration-200"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4">
        <div v-show="modalOpen" :id="id"
            class="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6"
            role="dialog" aria-modal="true">
            <div ref="modalContent"
                class="bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700 overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg">
                <!-- Search form -->
                <form @submit.prevent="submitForm">
                    <div class="mb-4">
                        <label for="productName" class="block text-sm font-medium text-gray-600">Product Name:</label>
                        <input type="text" id="productName" v-model="productName" required
                            class="mt-1 p-2 border rounded-md w-full">
                    </div>

                    <div class="mb-4">
                        <label for="description" class="block text-sm font-medium text-gray-600">Description:</label>
                        <textarea id="description" v-model="description" required
                            class="mt-1 p-2 border rounded-md w-full"></textarea>
                    </div>

                    <div class="mb-4">
                        <label for="price" class="block text-sm font-medium text-gray-600">Price:</label>
                        <input type="number" id="price" v-model="price" required class="mt-1 p-2 border rounded-md w-full">
                    </div>

                    <div class="mb-4">
                        <label for="initialStock" class="block text-sm font-medium text-gray-600">Initial Stock
                            Level:</label>
                        <input type="number" id="initialStock" v-model="initialStock" required
                            class="mt-1 p-2 border rounded-md w-full">
                    </div>

                    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    </transition>
</template>
  
<script>
export default {
    methods: {
        closeModal() {
            // Emit an event to notify the parent component to close the modal
            this.$emit('close');
        },
        submitForm() {
            // Handle form submission logic, e.g., emit an event to the parent component
            this.$emit('submit', /* pass form data here */);
            // Close the modal
            this.closeModal();
        },
    },
};
</script>
  
<style scoped>
/* Add your modal styling here */
</style>
  