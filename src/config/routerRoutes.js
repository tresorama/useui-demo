export const routerRoutes = {
  hero: {
    path: "/hero",
    label: "Hero",
  },
  elementsPreview: {
    path: "/elements-preview",
    label: "Elements Preview",
  },
  article: {
    path: "/article",
    label: "Article",
  },
  test: {
    path: "/test",
    label: "Test",
  },
};
export const menuItems = [...Object.keys(routerRoutes)].map(key => {
  return {
    ...routerRoutes[key],
    key,
  };
});
