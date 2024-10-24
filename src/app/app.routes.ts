import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'register',
    loadChildren: () =>
      import('../app/auth/auth.routes').then((m) => m.registerRoutes),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('../app/auth/auth.routes').then((m) => m.loginRoutes),
  },

  {
    path: 'feed',
    loadChildren: () =>
      import('../app/your-feed/your-feed.routes').then((m) => m.YOUR_FEED_ROUTES),
  },

  {
    path: '',
    loadChildren: () =>
      import('../app/globalFeed/globalFeed.routes').then((m) => m.GLOBAL_FEED_ROUTES),
  },
];
