import enums from "./enum";

export default [
  {
    id: 2222,
    title: "Nog een test story",
    status: enums.status.doing,
    description:
      "Hier komt een korte beschrijving die ik zelf heb samengesteld over wat de story inhoudt.",
    learningOpportunities: [
      enums.learningOpportunities.legacy,
      enums.learningOpportunities.dependencies,
    ],
    tags: [enums.tags.bug],
    jiraLink: "https://icanhazdadjoke.com/",
  },
  {
    id: 1111,
    title: "Test story",
    status: enums.status.open,
    description:
      "Hier komt een korte beschrijving die ik zelf heb samengesteld over wat de story inhoudt.",
    learningOpportunities: [
      enums.learningOpportunities.React,
      enums.learningOpportunities.redirects,
    ],
    tags: [enums.tags.frontend, enums.tags.feature],
    jiraLink: "https://icanhazdadjoke.com/",
  },
  {
    id: 3333,
    title: "Yet another test story",
    status: enums.status.done,
    description:
      "Hier komt een korte beschrijving die ik zelf heb samengesteld over wat de story inhoudt.",
    learningOpportunities: [
      enums.learningOpportunities.React,
      enums.learningOpportunities.legacy,
      enums.learningOpportunities.dependencies,
    ],
    tags: [enums.tags.feature, enums.tags.frontend],
    jiraLink: "https://icanhazdadjoke.com/",
  },
  {
    id: 4444,
    title: "Laatste test story, I promise",
    status: enums.status.open,
    description:
      "Hier komt een korte beschrijving die ik zelf heb samengesteld over wat de story inhoudt.",
    learningOpportunities: [enums.learningOpportunities.dependencies],
    tags: [enums.tags.frontend],
    jiraLink: "https://icanhazdadjoke.com/",
  },
  {
    id: 5555,
    title: "Psyccchhhhh",
    status: enums.status.done,
    description:
      "Hier komt een korte beschrijving die ik zelf heb samengesteld over wat de story inhoudt.",
    learningOpportunities: [enums.learningOpportunities.React],
    tags: [enums.tags.frontend],
    jiraLink: "https://icanhazdadjoke.com/",
  },
];
