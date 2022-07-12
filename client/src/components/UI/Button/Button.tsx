interface IButtonProps {
	buttonText: string;
	buttonClassName: string;
}

export function Button({ buttonText, buttonClassName }: IButtonProps) {
	return <button className={buttonClassName}>{buttonText}</button>;
}
