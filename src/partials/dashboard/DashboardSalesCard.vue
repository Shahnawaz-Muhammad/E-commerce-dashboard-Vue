<template>
    <div
        class="flex flex-col col-span-full md:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 class="font-semibold text-slate-800 dark:text-slate-100">Sales</h2>
        </header>
        <SalesChart :data="chartData" :options="chartOptions" width="595" height="248"></SalesChart>
    </div>
</template>
  
<script>
import SalesChart from '../../charts/SalesChart.vue';
import { ref } from 'vue'


export default {
    components: {
        SalesChart,
    },
    setup() {
        const chartData = ref({
            labels: [
                '12-01-2020', '01-01-2021', '02-01-2021',
                '03-01-2021', '04-01-2021', '05-01-2021',
            ],
            datasets: [
                // Light blue bars
                {
                    label: 'Direct',
                    data: [
                        800, 1600, 900, 1300, 1950, 1700,
                    ],
                    backgroundColor:
                        'rgba(111,168,220, 0.6)',
                    hoverBackgroundColor:
                        'rgba(111,168,220, 1)',
                    barPercentage: 0.66,
                    categoryPercentage: 0.66,
                },
                // Blue bars
                {
                    label: 'Indirect',
                    data: [
                        4900, 2600, 5350, 4800, 5200, 4800,
                    ],
                    backgroundColor:
                        'rgba(255, 99, 132, 0.6)',
                    hoverBackgroundColor:
                        'rgba(255, 99, 132, 1)',
                    barPercentage: 0.66,
                    categoryPercentage: 0.66,
                },
            ],
        })

        return {
            chartData,
        }
    }
};
</script>
  

backgroundColor:
                        'rgba(255, 99, 132, 0.2)',
                    borderColor:
                        'rgba(255, 99, 132, 1)'