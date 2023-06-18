import {lazy} from 'react';

const routes = [
  {
    path: '/',
    Component: lazy(() => import('../components/Home/Home')),
    isPrivate: false,
    isPublicOnly: false
  },
  {
    path: 'objects',
    Component: lazy(() => import('../components/Objects/Objects')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false
  },
  {
    path: 'objects/create_object',
    Component: lazy(() => import('../components/CreateObject/CreateObject')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false
  },
  {
    path: 'dashboard',
    Component: lazy(() => import('../components/Dashboard/Dashboard')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false
  },
  {
    path: 'tools',
    Component: lazy(() => import('../components/Tools/Tools')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false
  },
  {
    path: 'staff',
    Component: lazy(() => import('../components/Staff/Staff')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false
  },
]

export default routes;