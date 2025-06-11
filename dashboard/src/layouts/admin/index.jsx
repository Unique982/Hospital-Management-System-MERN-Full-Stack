import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes.js";

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      // Check main route
      if (
        window.location.href.indexOf(route.layout + "/" + route.path) !== -1
      ) {
        setCurrentRoute(route.name);
        return;
      }
      if (route.children) {
        for (let j = 0; j < route.children.length; j++) {
          const child = route.children[j];
          if (
            window.location.href.indexOf(child.layout + "/" + child.path) !== -1
          ) {
            setCurrentRoute(child.name);
            return;
          }
        }
      }
    }
    setCurrentRoute("Dashboard");
  };

  const getActiveNavbar = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary || false;
      }
    }
    return false;
  };

  const getRoutes = (routes) => {
    return routes.flatMap((route, index) => {
      if (route.layout === "/admin") {
        const routeElement = route.component ? (
          <Route
            path={`/${route.path}`}
            element={route.component}
            key={`route-${index}`}
          />
        ) : null;

        const childrenRoutes = route.children
          ? route.children
              .filter((child) => child.component)
              .map((child, idx) => (
                <Route
                  path={`/${child.path}`}
                  element={child.component}
                  key={`child-${index}-${idx}`}
                />
              ))
          : [];

        return [routeElement, ...childrenRoutes].filter(Boolean);
      }
      return [];
    });
  };

  document.documentElement.dir = "ltr";

  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Horizon UI Tailwind React"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="mx-auto mb-auto h-full min-h-[84vh] p-2 pt-5 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
