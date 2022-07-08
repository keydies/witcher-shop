import { Fragment } from 'react';
import { Header } from './Header/Header';

import '../scss/App.scss';

export function App(): JSX.Element {
	return (
		<Fragment>
			<Header />
		</Fragment>
	);
}
