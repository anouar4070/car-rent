import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";

import "../server";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route element={<Layout />}> */}
          <Route index element={<Home />} />{" "}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          {/* There is no sharing UI betwin vans & vanDetail so we don't put elemnt with outlet in the parent route */}
          {/* <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route> */}

          <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />} />
{/*  a way to make link to=".." works as expected in HostVanDetail.jsx */}
              {/* <Route path="vans" element={<Outlet />}>
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostVanDetail />} />
                  </Route> */}

          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
