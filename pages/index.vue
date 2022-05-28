<template>
    <div>
        <Head>
            <Title>💻 Personal Website - Anniken</Title>
        </Head>
        <main>
            <!-- Hero -->
            <section
                class="snap-center min-h-screen w-full bg-neutral-900 flex flex-col items-center justify-center text-white"
            >
                <h2 class="text-2xl">
                    <span class="animate-wave inline-block origin-70-70"
                        >👋</span
                    >Hi, im
                </h2>
                <h1
                    class="text-8xl font-bold mb-2 font-cursive transform -skew-y-12"
                >
                    Anniken
                </h1>
                <img
                    :src="me.picture.url"
                    :alt="me.picture.alt"
                    class="rounded-full border-2 border-white bg-slate-900 shadow-lg w-72 hover:scale-105 transform transition-all hover:shadow-md"
                />
                <h3 class="mt-5">I am interested in</h3>
                <a
                    v-for="(interest, index) in me.interests"
                    :style="
                        current_interest === index
                            ? 'opacity: 1; transform: scale(1.1);'
                            : 'opacity: 0.1;'
                    "
                    :key="index"
                    :href="interest.url"
                    class="mt-2 font-bold text-lg tracking-wide h-5 transition-all"
                    @mouseover="changeIndex(index)"
                    @focus="changeIndex(index)"
                    >{{ interest.title }}</a
                >
                <a href="#about">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 animate-bounce mt-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                        />
                    </svg>
                </a>
            </section>
            <!-- About -->
            <section
                class="snap-center w-full min-h-screen bg-gradient-to-br from-cyan-500 to-blue-500 flex flex-col justify-center items-center text-white"
                id="about"
            >
                <h1 class="font-bold text-2xl mb-5">👦 About Me</h1>
                <p class="max-w-lg text-center tracking-wide leading-relaxed">
                    Hi! Im Leo. I am
                    <span class="font-mono w-10">{{ age }}</span> Years old, and
                    live in
                    <img
                        :src="`https://countryflagsapi.com/svg/${me.country}`"
                        class="inline-block w-5"
                        :alt="`Flag of ${me.country}`"
                    />
                    {{ me.country }}. I am currently
                    <b>{{
                        me.employment.status
                            ? `employed at ${me.employment.company} as ${me.employment.position}`
                            : `unemployed and am ${
                                  me.employment.searching
                                      ? "searching"
                                      : "not searching"
                              } for a position`
                    }}</b
                    >. I
                    {{ me.education.finished ? "studied" : "am studying" }}
                    <b>{{ me.education.field }}</b> in
                    <b>{{ me.education.school }}</b> to achive
                    <b>{{ me.education.degree }}</b
                    >. My hobbies are
                    <b
                        >{{ me.hobbies.slice(0, -1).join(", ") }} and
                        {{ me.hobbies[me.hobbies.length - 1] }}</b
                    >.
                </p>
            </section>
            <!-- Code -->
            <section
                class="snap-center w-full min-h-screen bg-gradient-to-bl from-pink-500 to-purple-500 flex flex-col justify-center items-center text-white"
                id="code"
            >
                <h1 class="font-bold text-2xl mb-5">🧑‍💻 Coding Adventures</h1>
                <h2 class="text-xl font-bold mb-2">🈸 Languages and Skills</h2>
                <div class="mb-2" v-for="field in me.coding.fields">
                    For {{ field.name }}, I mainly use
                    <div class="inline-flex flex-row space-x-2">
                        <Badge
                            v-for="language in field.languages"
                            :url="language.url"
                            :color="language.color"
                            :bg_color="language.bgcolor"
                            :image="language.icon"
                            >{{ language.name }}</Badge
                        >
                    </div>
                    .
                </div>
                <br />
                <h2 class="text-xl font-bold mb-2">❤️ Favourites</h2>
                A few of my Favourite Tools and Libraries are:
                <div class="flex flex-col w-full justify-center items-center">
                    <Badge
                        v-for="tool in me.coding.favorites"
                        class="mb-2"
                        :url="tool.url"
                        :color="tool.color"
                        :bg_color="tool.bgcolor"
                        :image="tool.icon"
                        >{{ tool.name }}</Badge
                    >
                </div>
            </section>
            <!-- Projects -->
            <section
                class="snap-center w-full min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex flex-col justify-center items-center text-white"
                id="projects"
            >
                <h1 class="font-bold text-2xl mb-5">💻 Projects</h1>
                <p class="max-w-lg text-center tracking-wide leading-relaxed">
                    I have worked on,
                    <span class="font-mono w-10">{{
                        me.coding.projects.length
                    }}</span>
                    projects, the latest of them being
                    <b>{{
                        me.coding.projects[me.coding.latest_project].name
                    }}</b
                    >.
                </p>
                <div class="flex flex-col w-full justify-center items-center">
                    <Card
                        v-for="project in me.coding.projects"
                        :key="project.name"
                        :name="project.name"
                        :description="project.description"
                        :image="project.image"
                        :buttons="project.buttons"
                    />
                </div>
            </section>
            <!-- Contact -->
            <section
                class="snap-center w-full min-h-screen bg-gradient-to-br from-orange-500 to-yellow-500 flex flex-col justify-center items-center text-white"
                id="contact"
            >
                <h1 class="font-bold text-2xl mb-5">📧 Contact</h1>
                <p class="max-w-lg text-center tracking-wide leading-relaxed">
                    You can find me on
                    <span class="font-mono w-10">{{ me.contact.length }}</span>
                    different platforms:
                </p>
                <div class="flex flex-col w-full justify-center items-center">
                    <Badge
                        v-for="contact in me.contact"
                        :key="contact.name"
                        :url="contact.url"
                        :color="contact.color"
                        :bg_color="contact.bg_color"
                        :image="contact.image"
                        >{{ contact.name }}</Badge
                    >
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
const { data: me } = await useFetch("/api/me");
const interest = ref(me.value.interests[1]);
let current_interest = ref(0);
const age = ref(
    dayjs()
        .diff(dayjs.unix(1118119990), "year", true)
        .toString()
        .substring(0, 11)
);
const interest_interval = setInterval(() => {
    current_interest.value =
        (current_interest.value + 1) % me.value.interests.length;
}, 5000);

function changeIndex(index: number) {
    console.debug(`Changing index to ${index}`);
    current_interest.value = index;
}

setInterval(() => {
    age.value = dayjs()
        .diff(dayjs.unix(1118119990), "year", true)
        .toString()
        .substring(0, 11);
}, 50);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
