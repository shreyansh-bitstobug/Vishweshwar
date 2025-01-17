export const blogs = [
  {
    id: 1,
    title: "Repurposing CO2 and Harnessing Hydrogen’s Potential",
    tags: "Energy",
    image: "/image/values.jpg", // Replace with your actual image URL
    description:
      "Explore how Aramco is tackling the challenge of balancing affordable energy demand with carbon reduction through CO2 repurposing and hydrogen innovations.",
    date: "December 15, 2024", // Replace with the actual date of the blog
    link: "/blogs/repurposing-co2", // Adjust link based on your routing
    readTime: "10 min read",
    author: {
      name: "John Doe",
      avatar: "/image/john-doe.jpg", // Replace with the actual avatar URL
    },
    content: [
      {
        type: "li",
        text: "A global low-emissions future will rely on technology and energy innovations on a huge scale, and Aramco is well positioned to play an important role in a ",
        buttonText: "decarbonizing",
        buttonId: "popover-trigger-1",
      },
      {
        type: "li",
        text: "Reducing carbon emissions is an important step, but not enough in and of itself — carbon must be removed, and what is captured needs to become a valuable resource in its own right",
      },
      {
        type: "li",
        text: "Hydrogen is also gaining significant traction as a viable lower-carbon fuel for long-haul transport and as a 'zero-emission at point of use’ energy source that can impact high-emitting industries",
      },
    ],
    paragraphs: [
      {
        text: "It is one of the greatest challenges of our time — the need to balance the increasing demand for affordable and reliable energy with the need to reduce global carbon and other ",
        buttonText: "greenhouse",
        buttonId: "popover-trigger-2",
        link: {
          href: "https://www.iea.org/reports/net-zero-roadmap-a-global-pathway-to-keep-the-15-0c-goal-in-reach/a-renewed-pathway-to-net-zero-emissions#abstract",
          text: "have a key role",
        },
      },
    ],
    subheaders: [
      {
        title: "Repurposing CO2 and harnessing hydrogen's potential",
      },
    ],
  },
];