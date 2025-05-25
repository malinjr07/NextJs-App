import { tNavMenu } from "../types";

export const navMenu: tNavMenu[] = [
  {
    title: "business",
    url: "/",
    subMenu: [
      { title: "business overview", url: "/" },
      {
        title: "market solution",
        url: "/",
        subMenu: [
          { title: "automotive dealership", url: "/" },
          { title: "insurance agent", url: "/" },
          { title: "Non-Profit Organization", url: "/" },
        ],
      },
    ],
  },
  { title: "features", url: "/" },
  {
    title: "integrations",
    url: "/",
    subMenu: [
      { title: "integrations overview", url: "/" },
      { title: "api documentation", url: "/" },
      { title: "api reference", url: "/" },
      { title: "hubspot", url: "/" },
      { title: "salesforce", url: "/" },
      { title: "zapier", url: "/" },
      { title: "shopify", url: "/" },
    ],
  },
  { title: "pricing", url: "/" },
  { title: "resources", url: "/" },
  { title: "about", url: "/" },
];
