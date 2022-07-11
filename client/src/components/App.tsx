import '../scss/App.scss';

import { Fragment } from 'react';

import { Header } from './Header/Header';

export function App(): JSX.Element {
	return (
		<Fragment>
			<Header />
		</Fragment>
	);
}
