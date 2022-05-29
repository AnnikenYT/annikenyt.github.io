export default defineEventHandler((event) => {
    return {
        picture: {
            url: "/img/Profile.png",
            alt: "My Profile picture",
        },
        interests: [
            { title: "🧑‍💻 Web Development", url: "#code" },
            { title: "🎨 Image- and Mediadesign", url: "#design" },
            { title: "🎵 Music Composition and Production", url: "#music" },
            {
                title: "🎥 Film and Video Production",
                url: "https://bananas-studios.de/",
            },
        ],
        hobbies: ["🧑‍💻 Coding", "⛵ Sailing", "🚴‍♂️ Biking"],
        country: "Germany",
        employment: {
            status: false,
            searching: false,
            company: "Sdui GmBH",
            position: "Intern",
        },
        education: {
            finished: false,
            degree: "High School Graduation",
            field: "General Studies",
            school: "a School",
        },
        coding: {
            fields: [
                {
                    name: "Frontend Web Apps",
                    level: "Advanced",
                    languages: [
                        {
                            name: "TypeScript",
                            url: "https://www.typescriptlang.org/",
                            icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
                            color: "#2b7489",
                            bgcolor: "#e5e5e5",
                        },
                        {
                            name: "Vue.js",
                            url: "https://vuejs.org/",
                            icon: "https://cdn.worldvectorlogo.com/logos/vue-js-1.svg",
                            color: "#42b883",
                            bgcolor: "#f5f6fa",
                        }
                    ],
                },
                {
                  name: "Misc Projects",
                  level: "Advanced",
                  languages: [
                      {
                          name: "Python",
                          url: "https://www.python.org/",
                          icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
                          color: "#3572A5",
                          bgcolor: "#f5f6fa",
                      },
                    ]
                }

            ],
            favorites: [
              {
                name: "Nuxt 3",
                url: "https://nuxtjs.org/",
                icon: "https://cdn.worldvectorlogo.com/logos/nuxt-2.svg",
                color: "#2b7489",
                bgcolor: "#e5e5e5",
              },
              {
                name: "Tailwind CSS",
                url: "https://tailwindcss.com/",
                icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                color: "#42b883",
                bgcolor: "#f5f6fa",
              },
              {
                name: "Visual Studio Code",
                url: "https://code.visualstudio.com/",
                icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
                color: "#3572A5",
                bgcolor: "#f5f6fa",
              }
            ],
            projects: [
                {
                  name: "Bergflix.",
                  description: "Bergflix is a community-built open source streaming platform for the german Minecraft-Youtuber und Machinima creator Herr Bergmann. It was originally build by a Team 7 people, but due to a lack of motivation the project got put on hold.",
                  url: "https://bergflix.de/",
                  github: "https://github.com/bergflix-remake",
                  stack: "",
                  buttons: [
                    {
                      name: "Github",
                      url: "https://github.com/bergflix-remake",
                      color: "#3572A5",
                      bg_color: "#f5f6fa",
                      image: "https://cdn.worldvectorlogo.com/logos/github-icon.svg",
                    },
                    {
                      image: "https://cdn.worldvectorlogo.com/logos/webhook-1.svg",
                      color: "#3572A5",
                      bg_color: "#f5f6fa",
                      name: "Visit",
                      url: "https://bergflix.de/",
                    }
                  ],
                  image:                     {
                    url: "https://pbs.twimg.com/media/FQffhv2WQAkNYeq?format=jpg&name=large",
                    alt: "Bergflix. Watchpage",
                  },
                }
            ],
            latest_project: 0
        },
        design: {
          images: [
            {
              url: "/img/design-1.png",
              alt: "Wallpaper, Fiverr commission",
            },
            {
              url: "/img/design-2.png",
              alt: "Character design, Fiverr commission",
            },
            {
              url: "/img/design-3.png",
              alt: "Character design, Fiverr commission",
            }
          ]
        },
        contact: [
          {
            name: "Email",
            content: "anniken@mooonshine.net",
            url: "mailto:anniken@mooonshine.net",
            color: "#3572A5",
            bg_color: "#f5f6fa",
            image: "https://cdn.worldvectorlogo.com/logos/gmail-icon.svg",
          },
          {
            name: "Github",
            content: "AnnikenYT",
            url: "https://github.com/AnnikenYT",
            color: "#3572A5",
            bg_color: "#f5f6fa",
            image: "https://cdn.worldvectorlogo.com/logos/github-icon.svg",
          },
          {
            name: "Discord",
            content: "Anniken#0001",
            url: "",
            color: "#3572A5",
            bg_color: "#f5f6fa",
            image: "https://cdn.worldvectorlogo.com/logos/discord.svg",
          },
          {
            name: "Twitter",
            content: "AnnikenToGo",
            url: "https://twitter.com/AnnikenToGo",
            color: "#3572A5",
            bg_color: "#f5f6fa",
            image: "https://cdn.worldvectorlogo.com/logos/twitter-3.svg",
          },
          {
            name: "Instagram",
            content: "itisanniken",
            url: "https://www.instagram.com/itisanniken/",
            color: "#3572A5",
            bg_color: "#f5f6fa",
            image: "https://cdn.worldvectorlogo.com/logos/instagram-icon-1.svg",
          },
          {
            name: "Fiverr",
            content: "annikentogo",
            url: "https://www.fiverr.com/annikentogo",
            color: "#3572A5",
            bg_color: "#f5f6fa",
            image: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
          }
        ]
    };
});
