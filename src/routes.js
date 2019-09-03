import React from "react";
import {BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Recupera from "./pages/Recupera";

export default function Routes() {
    return (
        <BrowserRouter>
         <Route exact path="/" component={Login} />
         <Route path="/cadastro" component={Cadastro} />
         <Route path="/recupera" component={Recupera} />
        </BrowserRouter>
    );
}