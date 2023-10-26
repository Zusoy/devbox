const routes = {
  homepage: () => '/',
  uuidGenerator: () => '/uuid',
  loremGenerator: () => '/lorem',
  keyboard: () => '/keyboard',
}

export type AppRoutes = typeof routes
export default routes