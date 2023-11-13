<template>
    <Bar :data="chartData" :width="width" :height="height" />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    props: {
        chartData: {
            type: Object,
            required: true,
        },
        width: {
            type: String,
            default: 300,
        },
        height: {
            type: String,
            default: 150,
        },
    },
}
</script>