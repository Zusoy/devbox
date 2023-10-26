const routes = {
  homepage: () => '/',
  uuidGenerator: () => '/uuid',
  loremGenerator: () => '/lorem'
}

export type AppRoutes = typeof routes
export default routes