import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Aodhan Hamilton",
  logo: "/logo.webp",
  email: "hamilton.aodhan@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/MVAodhan",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mvaodhan/",
    icon: "mdi:linkedin",
    external: true
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Aodhan Hamilton",
    description:
      "Software developer from New Zealand",
    image: identity.logo,
  },
  role: "Software Developer & Digital Assistant",
  description:
    "I'm Aodhan Hamilton, I'm a Software Developer with a non-tradition background and a part-time Digital Assistant for Learn with Jason.",
  socialLinks: socialLinks,
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Aodhan Hamilton",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Aodhan Hamilton, a Software Developer and Part-Time Digital Assistant at Learn with Jason.
<br/><br/>
I'm a builder and tinkerer and all around JavaScript / TypeScript enthusiast, who dabbles in a bit of Golang<br/><br/>
I enjoy creating and contracting. I like problem solving and am alway egar to provide solutions for others.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: " Digital Assistant",
        company: {
          name: "Learn with Jason",
          image: "/logo.webp",
          url: "https://www.learnwithjason.dev/",
        },
        date: "2022 - Present",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Aodhan Hamilton",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Schedule with Jason",
      description: "An internal tool to help schedule Learn with Jason episode",
      image: "/demo-2.jpg",
      year: "2022",
      url: "https://www.schedulewithjason.page/",
    },
    
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Aodhan Hamilton",
    description: "Tech breakdowns and how to's.",
    image: identity.logo,
  },
  subtitle: "Tech breakdowns and how to's.",
};

export const devToUsername : string = "mvaodhan"