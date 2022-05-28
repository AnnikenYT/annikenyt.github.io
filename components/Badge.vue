<template>
    <a :href="url" target="_blank" :class="`flex flex-row p-2 rounded-md shadow-sm w-fit`" :style="'background-color: ' + bg_color + ';'">
        <img :src="image" alt="" class="w-5 h-5 mr-2">
        <b :style="`color: ${color};`">
            <slot />
        </b>
    </a>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        default: "white"
    },
    bg_color: {
        type: String,
        default: "black"
    },
    image: {
        type: String,
        default: "https://picsum.photos/200/200"
    },
    url: {
        type: String,
        default: "#"
    }
})
</script>