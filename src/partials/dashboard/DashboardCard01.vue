<template>
  <div
    class="flex flex-col col-span-full  md:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
    <div class="px-5 py-5">
      <header class="flex justify-between items-start mb-2">
        <!-- Icon -->
        <!-- <img src="../../images/icon-01.svg" width="32" height="32" alt="Icon 01" /> -->
        <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Sales</h2>

        <EditMenu align="right" class="relative inline-flex">
          <li>
            <a class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
              href="#0">Option 1</a>
          </li>
          <li>
            <a class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
              href="#0">Option 2</a>
          </li>
          <li>
            <a class="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" href="#0">Remove</a>
          </li>
        </EditMenu>
      </header>
      <div class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Sales</div>
      <div class="flex items-start">
        <div class="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">$24,780</div>
        <div class="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+49%</div>
      </div>
    </div>
  </div>
</template>

<script>
import EditMenu from '../../components/DropdownEditMenu.vue'


export default {
  name: 'DashboardCard01',
  components: {
    EditMenu,
  },
}
</script>