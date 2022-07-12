import React from 'react';
import 'animate.css';
import { AppRouters } from './components/routers/AppRouters';
import AuthProvider from "./auth/context/AuthProvider";

const HeroApp = () => {
    return (
      <AuthProvider>
          <AppRouters/>
      </AuthProvider>

    );
};

export default HeroApp;
