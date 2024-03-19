import AppFramework from '@app/appFramework';
import ErrorPage from "@app/errorPage";
import LandingPage from '@app/landingPage';
import LandingPageToo from '@app/landingPageToo';
import LoginPage from '@auth/loginPage';
import { Navigate, useLocation, Outlet  } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom'
import { selectAccessToken } from '@redux/actions';
import store from '@redux/store';

export const AppRoutes = () => {
    return (
        <Routes>
          <Route element={<PrivateRoute/>}>
              <Route path='/' element={<AppFramework />} errorElement={<ErrorPage />}>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<LandingPageToo />} />
              </Route>
          </Route>
          <Route path='/login' element={<LoginPage />} errorElement={<ErrorPage />}/>
        </Routes>
    );
};

export const PrivateRoute = () => {
    const accessToken = selectAccessToken(store.getState());
    const location = useLocation();
    return (
        accessToken !== null ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />
    );
};