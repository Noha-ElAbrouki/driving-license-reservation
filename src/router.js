import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import PersistentDrawerLeft from "./accueil/Drawer";
import EspaceUser from "./espaceUser/EspaceUser";
import Rdvs from "./rdvs/Rdvs";
import DetailsRdv from "./rdvs/DetailsRdv";
import Reservation from "./reservation/Reservation";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <PersistentDrawerLeft />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "rdvs",
        element: <Rdvs />,
      },
      {
        path: "details/:id",
        element: <DetailsRdv />,
      },
      {
        path: "reservation/:id",
        element: <Reservation />,
      },
      {
        path: "mon-espace",
        element: <EspaceUser />,
      },
    ],
  }
]);



function ErrorPage() {
  return <h2>Error!</h2>;
}