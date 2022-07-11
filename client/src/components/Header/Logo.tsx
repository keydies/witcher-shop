import '../../scss/Header.scss';

import { Link } from 'react-router-dom';

const headerLogo = require('../../assets/logo-dark.jpg');

export function Logo(): JSX.Element {
	return (
		<Link to='/home' className='logo'>
			<div className='logo__inner'>
				<div className='logo__image'>
					<img src={headerLogo} alt='logo' />
				</div>
				<div className='logo__title'>Witcher Shop</div>
			</div>
		</Link>
	);
}
