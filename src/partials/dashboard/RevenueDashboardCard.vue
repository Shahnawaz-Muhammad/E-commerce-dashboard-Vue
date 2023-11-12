<template>
    <div
        class="flex flex-col col-span-full md:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <div class="flex justify-between px-5 py-2 items-center">
            <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 class="font-semibold text-slate-800 dark:text-slate-100">Revenue</h2>
            </header>
            <div>
                <select v-model="selectedPeriod" @change="updateChartData" class="p-2 w-40 border ml-5 mb-3">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="annually">Annually</option>
                </select>
            </div>
        </div>
        <LineChart :data="chartData" :options="chartOptions" width="595" height="248"></LineChart>
    </div>
</template>
  
<script>
import LineChart from '../../charts/LineChart.vue';

export default {
    components: {
        LineChart,
    },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',

                        borderColor: 'rgba(255, 99, 132, 1)',

                        data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]
            },
            chartOptions: {

            }
        };
    },
};
</script>
  