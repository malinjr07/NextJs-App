type tSubMenuItem = {
  title: string;
  url: string;
  subMenu?: tSubMenuItem[];
};

export type tNavMenu = {
  title: string;
  url: string;
  subMenu?: tSubMenuItem[];
};
