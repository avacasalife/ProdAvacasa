const menuItems = [
    { name: "Buy", path: "/buy" },
    { name: "Rent", path: "/rent" },
    { name: "Sell", path: "/sell" },
    {
      name: "Compass Exclusives",
      path: "#",
      subMenu: [
        { name: "Private Exclusives", path: "/exclusive/private" },
        { name: "Coming Soon", path: "/exclusive/coming-soon" },
        { name: "Compass Listings", path: "/exclusive/listings" },
      ],
    },
    {
      name: "New Development",
      path: "#",
      subMenu: [
        { name: "Current Developments", path: "/new-development/current" },
        { name: "Compass Development Marketing Group", path: "/new-development/marketing" },
      ],
    },
    {
      name: "Agents",
      path: "#",
      subMenu: [
        { name: "Find an Agent", path: "/agents/find" },
        { name: "Join Compass", path: "/agents/join" },
      ],
    },
  ];
  
  export default menuItems;
  