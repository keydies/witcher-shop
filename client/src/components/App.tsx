import '../scss/App.scss';

import { Fragment } from 'react';

import { Auth } from '../pages/Auth';
import { Home } from '../pages/Home';

export function App(): JSX.Element {
	const isAuth = false;
	return <Fragment>{isAuth ? <Home /> : <Auth />}</Fragment>;
}
