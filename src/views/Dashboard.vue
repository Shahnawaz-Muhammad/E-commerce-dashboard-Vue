<template>
  <div class="grid grid-cols-12 gap-6">
    <DashboardCard01 />
    <DashboardCard01 />
    <DashboardCard01 />
    <DashboardSalesCard />
    <RevenueDashboardCard />

  </div>
</template>

<script>
import DashboardCard01 from '../partials/dashboard/DashboardCard01.vue'
import DashboardSalesCard from '../partials/dashboard/DashboardSalesCard.vue'
import RevenueDashboardCard from '../partials/dashboard/RevenueDashboardCard.vue';


export default {
  name: 'dashboard',
  components: {
    DashboardCard01,
    DashboardSalesCard,
    RevenueDashboardCard
  }
}
</script>