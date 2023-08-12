import {lazy} from 'react';

const routes = [
  {
    path: '/',
    Component: lazy(() => import('../components/Home/Home')),
    isPrivate: false,
    isPublicOnly: false
  },
  {
    path: 'projects',
    Component: lazy(() => import('../components/Objects/Objects')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false
  },
  {
    path: 'projects/create_project',
    Component: lazy(() => import('../components/CreateProject/CreateProject')),
    isPrivate: false, // Temporary false, but with Authentication should be true
    isPublicOnly: false
  },
  {
    path: 'projects/:projectId',
    Component: lazy(() => import('../components/ProjectCard/ProjectCard')),
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