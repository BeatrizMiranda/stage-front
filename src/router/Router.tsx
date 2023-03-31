import App from 'App';
import AreaDetails from 'pages/Area/AreaDetails';
import AreaForm from 'pages/Area/AreaForm';
import HomePage from 'pages/HomePage';
import ProjectDetails from 'pages/Project/ProjectDetails';
import ProjectForm from 'pages/Project/ProjectForm';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'area/:areaId',
        element: <AreaDetails />,
      },
      {
        path: 'area/:areaId/edit',
        element: <AreaForm />,
      },
      {
        path: 'area/create',
        element: <AreaForm />,
      },
      {
        path: 'project/:projectId',
        element: <ProjectDetails />,
      },
      {
        path: 'project/:projectId/edit',
        element: <ProjectForm />,
      },
      {
        path: 'project/create',
        element: <ProjectForm />,
      },
    ],
  }
])

export default router
