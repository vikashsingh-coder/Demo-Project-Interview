import { createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes.json";
import React from "react";

const dynamicPage = (folder: string) => {
  return React.lazy(() => import(`./pages/${folder}`));
};

export const router = createBrowserRouter(
  routes.map((r) => ({
    path: r.path,
    element: (
      <React.Suspense fallback={<div>Loading....</div>}>
        {React.createElement(dynamicPage(r.folder))}
      </React.Suspense>
    ),
  }))
);
