<template>
  <header>
    <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
      <!-- Hambuger menu -->
      <button class="text-slate-500 hover:text-slate-600 lg:hidden" @click.stop="$emit('toggleSidebar')"
        aria-controls="sidebar" :aria-expanded="sidebarOpen">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="16" height="2" />
          <rect x="4" y="11" width="16" height="2" />
          <rect x="4" y="17" width="16" height="2" />
        </svg>
      </button>
      <!-- Search bar -->

      <div class="w-full flex justify-end">

        <!-- User login -->
        <div class="w-[250px] flex items-center gap-5">
          <div>
            <button
              class="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3"
              :class="{ 'bg-slate-200': searchModalOpen }" @click.stop="searchModalOpen = true"
              aria-controls="search-modal">
              <span class="sr-only">Search</span>
              <svg class="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path class="fill-current text-slate-500 dark:text-slate-400"
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path class="fill-current text-slate-400 dark:text-slate-500"
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </button>
            <SearchModal id="search-modal" searchId="search" :modalOpen="searchModalOpen"
              @open-modal="searchModalOpen = true" @close-modal="searchModalOpen = false" />
          </div>
          <div class="flex items-center justify-start space-x-4" @click="toggleDropDownEvent">
            <img class="w-10 h-10 rounded-full border-2 border-gray-50"
              src="https://yt3.ggpht.com/hqsxh-Vnbw9OK0_X4DAWh6RkmEUVnL-82SRCyh-IKr9fIXR8zhUCRdBEwgWWL_14q_L8Piod=s108-c-k-c0x00ffffff-no-rj"
              alt="">
            <div class="font-semibold dark:text-white text-left">
              <div>Shahnawaz ,Dev</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
            </div>
          </div>
          <!-- Drop down -->
          <div v-show="showDropDown"
            class="absolute top-10 right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1 text-left" role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-0">Account settings</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-1">Support</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                id="menu-item-2">License</a>
              <form method="POST" action="#" role="none">
                <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem"
                  tabindex="-1" id="menu-item-3">Sign out</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

import SearchModal from '../../components/ModalSearch.vue'

export default {
  name: 'Header',
  props: {
    showDropDown: Boolean,
    sidebarOpen: Boolean
  },
  components: {
    SearchModal,
  },
  methods: {
    toggleDropDownEvent() {
      this.$emit('toggleDrop');
    },
    toggleSideBarEvent() {
      this.$emit('toggleSideBar')
    }
  },
  setup() {
    const searchModalOpen = ref(false)
    return {
      searchModalOpen,
    }
  }
}
</script>