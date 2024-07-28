import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DetailsRdv from './rdvs/DetailsRdv';
import Reservation from './reservation/Reservation';

const PersistentDrawerLeft = lazy(() => import('./accueil/Drawer'));
const Rdvs = lazy(() => import('./rdvs/Rdvs'));
const EspaceUser = lazy(() => import('./espaceUser/EspaceUser'));

const ErrorPage = () => {
  return <h2>Error!</h2>;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PersistentDrawerLeft />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'rdvs',
        element: <Rdvs />,
      },
      {
        path: 'details/:id',
        element: <DetailsRdv />,
      },
      {
        path: 'reservation/:id',
        element: <Reservation />,
      },
      {
        path: 'mon-espace',
        element: <EspaceUser />,
      },
    ],
  },
]);
