import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    game1,
    game2,
    game3,
    game4,
    brand1,
    brand2,
    brand3,
    brand4,
    tab1,
    tab2,
    tab3,
    tab4,
    services1,
    services2,
    services3,
    services4,
    services5,
    services6,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About Us",
    },
    {
        id: "work",
        title: "Games",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const brands = [{
        title: "Brand 1",
        icon: brand1,
    },
    {
        title: "Brand 2",
        icon: brand2,
    },
    {
        title: "Brand 3",
        icon: brand3,
    },
    {
        title: "Brand 4",
        icon: brand4,
    },
];

const experiences = [{
        title: "Game 1",
        company_name: "Windows, Mac, PS5, X-Box",
        icon: game1,
        iconBg: "#E6DEDD",
        date: "",
        points: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Proin efficitur tellus a lectus dignissim fringilla",
            "Phasellus at erat sagittis sem pellentesque interdum"
        ],
    },
    {
        title: "Game 2",
        company_name: "Android, IOS",
        icon: game2,
        iconBg: "#E6DEDD",
        date: "",
        points: [
            "Nunc ultricies eros vestibulum, pretium turpis vitae, fermentum lacus",
            "Nunc ultrices nisi nec laoreet posuere",
            "In viverra massa ut sapien ultricies, hendrerit venenatis velit egestas",
        ],
    },
    {
        title: "Game 3",
        company_name: "Windows, Mac, Android, IOS",
        icon: game3,
        iconBg: "#E6DEDD",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Proin efficitur tellus a lectus dignissim fringilla",
            "Phasellus at erat sagittis sem pellentesque interdum",
        ],
    },
    {
        title: "Game 4",
        company_name: "PlayStation, X-Box",
        icon: game4,
        iconBg: "#E6DEDD",
        points: [
            "Nunc ultricies eros vestibulum, pretium turpis vitae, fermentum lacus",
            "Nunc ultrices nisi nec laoreet posuere",
            "In viverra massa ut sapien ultricies, hendrerit venenatis velit egestas",
        ],
    },
];

const testimonials = [{
        testimonial: "We were able to supplement our small development team with several more developers that worked on front and backend features. I would love to work with xyz games again if needed",
        name: "Lee Chong",
        designation: "CFO",
        company: "JumpStart Games",

    },
    {
        testimonial: "Well, I signed up to work with Xyz games for a project and they really exceeded my expectations. The project was delivered on time, with no hiccups whatsoever. They are talented and professional game developers who get the job done without fail.",
        name: "Sam Gilfred",
        designation: "Sr. Project Manager",
        company: "Amazon",

    },
    {
        testimonial: "I was very pleased with the quality of the work we received for our project. They were delivered on time and with very minimal feedback from our team. Juego Studios is good company to work and will be looking to them for our future projects!",
        name: "Paul Skinner",
        designation: "Director",
        company: "Wicked Witch",

    },
];

const projects = [{
        name: "END-TO-END GAME DEVELOPMENT",
        description: "Among our greatest strengths is that Juego has experts from all domains of game development. So, we handle the entire production process of games, from the idea to its release, without any external assistance required.",
        tags: [],
        image: tab2,

    },
    {
        name: "FULLY-FLEDGED ART & DESIGN TEAM",
        description: "Juego has a complete game art team. This includes concept artists, 2D artists, modelers, UI designers, and animators; all handpicked for their artistic talent. For simple mine-games to AAA projects, our team creates memorable game art",
        tags: [],
        image: tab3,

    },
    {
        name: "LIVE OPERATIONS & SUPPORT",
        description: "We help you generate maximum revenue through data-analysis. In addition, we also offer extensive post-release support and LiveOps services based on solid insights from analytics data. This is the reason so many brands have worked with",
        tags: [],
        image: tab4,

    },
];
const Services = [{
        name: "Unity Development",
        description: "Among our greatest strengths is that Juego has experts from all domains of game development. So, we handle the entire production process of games, from the idea to its release, without any external assistance required.",
        tags: [],
        image: services1,

    },
    {
        name: "Unreal Development",
        description: "Juego has a complete game art team. This includes concept artists, 2D artists, modelers, UI designers, and animators; all handpicked for their artistic talent. For simple mine-games to AAA projects, our team creates memorable game art",
        tags: [],
        image: services2,

    },
    {
        name: "Android Development",
        description: "We help you generate maximum revenue through data-analysis. In addition, we also offer extensive post-release support and LiveOps services based on solid insights from analytics data. This is the reason so many brands have worked with",
        tags: [],
        image: services3,

    },
    {
        name: "React Development",
        description: "Among our greatest strengths is that Juego has experts from all domains of game development. So, we handle the entire production process of games, from the idea to its release, without any external assistance required.",
        tags: [],
        image: services4,

    },
    {
        name: "Three Development",
        description: "Juego has a complete game art team. This includes concept artists, 2D artists, modelers, UI designers, and animators; all handpicked for their artistic talent. For simple mine-games to AAA projects, our team creates memorable game art",
        tags: [],
        image: services5,

    },
    {
        name: "Nintendo Switch",
        description: "We help you generate maximum revenue through data-analysis. In addition, we also offer extensive post-release support and LiveOps services based on solid insights from analytics data. This is the reason so many brands have worked with",
        tags: [],
        image: services6,

    },
];

export { brands, experiences, testimonials, projects, Services };