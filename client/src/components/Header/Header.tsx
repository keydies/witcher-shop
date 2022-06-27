import { DesktopMenu } from './DesktopMenu';
import { Logo } from './Logo';

import '../../scss/Header.scss';
import Basket from './Basket';
import { Favorites } from './Favorites';
import { Exit } from './Exit';

export function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<Logo />
					<div className='header__nav'>
						<DesktopMenu />
						<span className='header__wall'></span>
						<Basket />
						<Favorites />
						<Exit />
					</div>
				</div>
			</div>
		</header>
	);
}
