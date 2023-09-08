import { Route, Routes } from 'react-router-dom';

import Footer from 'components/layout/Footer/Footer';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Catalog from 'pages/Collection/Collection';
import Header from 'components/layout/Header/Header';
import Favorites from 'pages/Favorites/Favorites';
import UserAccount from 'pages/UserAccount/UserAccount';
import ToTopButton from 'components/buttonToTop/ToTopButton';

function app() {
  return (
    <div className='main-wrapper'>
      <Header />

      <div className='content'>
        {/* // связываем адреса и компоненты (грубо говоря) */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user-account' element={<UserAccount />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/collection/all' element={<Catalog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

      <ToTopButton />
      <Footer />
    </div>
  );
}

export default app;
