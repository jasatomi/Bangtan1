var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // Gallery Page
  {
    path: '/gallery/',
    url: './pages/gallery.html',
    name: 'gallery',
  },
  // Members Page
  {
    path: '/members/',
    url: './pages/members.html',
    name: 'members',
  },
  // Songs Page
  {
    path: '/songs/',
    url: './pages/songs.html',
    name: 'songs',
  },
  // Credits Page
  {
    path: '/credits/',
    url: './pages/credits.html',
    name: 'credits',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
