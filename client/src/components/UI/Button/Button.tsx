import './Button.scss';

interface IButtonProps {
	parentBlockClassName: string;
	buttonText: string;
}

export function Button({
	parentBlockClassName,
	buttonText
}: IButtonProps): JSX.Element {
	return (
		<div className={parentBlockClassName}>
			<button className={`${parentBlockClassName}__button`}>
				{buttonText}
			</button>
		</div>
	);
}
