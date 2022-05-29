<template>
        <div class="m-3 p-5 sm:w-96 min-h-[31rem] w-full rounded-md shadow-lg text-justify bg-neutral-900">
            <img :src="image.url" :alt="image.alt" class="max-w-96 rounded-md" />
            <h3 class="text-lg font-bold">{{ name }}</h3>
            <p>
                {{ description }}
            </p>
            <div class="flex flex-col space-y-2">
                <Badge
                    v-for="button in buttons"
                    :key="button.name"
                    :url="button.url"
                    :color="button.color"
                    :bg_color="button.bg_color"
                    :image="button.image"
                    >{{ button.name }}</Badge
                >
            </div>
        </div>
</template>
<script setup lang="ts">
interface Image {
    src: string;
    alt: string;
}
interface Button {
    name: string;
    url: string;
    color: string;
    bg_color: string;
    image: string;
}
const props = defineProps({
    name: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
    buttons: {
        type: Array as () => { name: string; url: string; color: string; bg_color: string; image: string; }[],
        default: () => [],
    },
    image: {
        type: Object as () => { url: string; alt: string },
    },
});
</script>
