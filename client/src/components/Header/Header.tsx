import { Logo } from './Logo';
import { DesktopMenu } from './DesktopMenu';
import { Basket } from './Basket';
import { Favorites } from './Favorites';
import { Exit } from './Exit';

import '../../scss/Header.scss';

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
