import { Link } from 'react-router-dom';
import '../../scss/Header.scss';

const headerLogo = require('../../assets/logo.png');

export function Logo() {
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
