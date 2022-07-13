import './Input.scss';

interface IInputProps {
	parentBlockClassName: string;
	placeholder: string;
	labelText: string;
	inputType: string;
}

export function Input({
	parentBlockClassName,
	placeholder,
	labelText,
	inputType
}: IInputProps): JSX.Element {
	return (
		<div className={parentBlockClassName}>
			<label
				className={`${parentBlockClassName}__title`}
				htmlFor={`${parentBlockClassName}__field`}
			>
				{labelText}
			</label>
			<input
				className={`${parentBlockClassName}__field`}
				id={`${parentBlockClassName}__field`}
				type={inputType}
				placeholder={placeholder}
			/>
		</div>
	);
}
