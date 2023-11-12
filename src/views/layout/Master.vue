<template>
    <div class="flex h-screen overflow-hidden">

        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

            <Header :sidebarOpen="sidebarOpen" @toggleSidebar="sidebarOpen = !sidebarOpen" :showDropDown="showDropDown"
                @toggleDrop="showDropDown = !showDropDown" />

            <main>
                <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <router-view />
                </div>
            </main>

        </div>

    </div>
</template>

<script>
import Header from '../../components/common/Header.vue'
import Sidebar from '../../components/common/Sidebar.vue'

export default {
    components: {
        Header, Sidebar
    },
    data() {
        return {
            sidebarOpen: true,
            showDropDown: false,
        };
    },
}
</script>