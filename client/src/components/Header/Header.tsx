import '../../scss/Header.scss';

import { Basket } from './Basket';
import { DesktopMenu } from './DesktopMenu';
import { Exit } from './Exit';
import { Favorites } from './Favorites';
import { Logo } from './Logo';

export function Header(): JSX.Element {
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
