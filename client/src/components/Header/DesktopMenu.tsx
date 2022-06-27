import { Link } from 'react-router-dom';

export function DesktopMenu(): JSX.Element {
	return (
		<ul className='desktop-menu'>
			<Link to='/home/clothes' className='desktop-menu__link'>
				<li className='desktop-menu__item'>Clothes</li>
			</Link>
			<Link to='/home/books' className='desktop-menu__link'>
				<li className='desktop-menu__item'>Books</li>
			</Link>
			<Link to='/home/accessories' className='desktop-menu__link'>
				<li className='desktop-menu__item'>Accessories</li>
			</Link>
		</ul>
	);
}
