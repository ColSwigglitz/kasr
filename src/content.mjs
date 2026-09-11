export const content = {
  source: "https://www.kabulsmallanimalrescue.com/",
  reviewed: "2026-09-11",
  services: [
    {
      title: "Veterinary care",
      text: "Routine and emergency treatment for pets, street animals and working animals.",
      source: "https://www.kabulsmallanimalrescue.com/what-we-do",
    },
    {
      title: "Rescue & shelter",
      text: "Medical care and shelter for injured and orphaned street animals.",
      source: "https://www.kabulsmallanimalrescue.com/",
    },
    {
      title: "Adoption",
      text: "Helping homeless pets find families in Afghanistan and abroad.",
      source: "https://www.kabulsmallanimalrescue.com/",
    },
    {
      title: "Animal transport",
      text: "Planning and logistics on a case-by-case basis, subject to airlines and destination regulations.",
      source: "https://www.kabulsmallanimalrescue.com/what-we-do",
    },
  ],
  gallery: [1, 2, 3, 4].map((n) => ({
    id: `home-${n}`,
    src: `assets/gallery-${n}.jpg`,
    alt: `Photograph ${n} from the KSAR homepage`,
    source: "https://www.kabulsmallanimalrescue.com/",
    publishedAt: null,
    status: "published",
  })),
  story: {
    id: "chase",
    title: "Chase: a journey back to family",
    image: "assets/chase.jpg",
    summary:
      "Former working dog Chase arrived at KSAR in November 2022. The team worked to reunite him with his former handler in the United States, a story featured by CBS News.",
    source: "https://www.kabulsmallanimalrescue.com/",
    status: "published",
    featured: true,
    publishedAt: null,
  },
};
