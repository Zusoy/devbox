const routes = {
  homepage: () => '/',
  uuidGenerator: () => '/uuid',
  loremGenerator: () => '/lorem',
  keyboard: () => '/keyboard',
  readmeEditor: () => '/readme'
}

export type AppRoutes = typeof routes
export default routes