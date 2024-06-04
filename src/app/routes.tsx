import AppFramework from '@components/app/framework';
import ErrorPage from "@app/errorPage";
import LandingPage from '@app/landingPage';
import PlayerSearch from '@components/search/playerSearch';
import PlayerPage from '@components/players/playerPage';
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
                <Route path=':Search' element={<PlayerSearch />} />
                <Route path=':Player/:PlayerId' element={<PlayerPage />} />
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