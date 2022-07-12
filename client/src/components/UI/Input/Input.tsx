import './Input.module.scss';

interface IInputProps {
	parentClassName: string;
	placeholder: string;
	labelText: string;
	inputType: string;
}

export function Input({
	parentClassName,
	placeholder,
	labelText,
	inputType
}: IInputProps) {
	return (
		<div className={parentClassName}>
			<label
				className={`${parentClassName}__title`}
				htmlFor={`${parentClassName}__field`}
			>
				{labelText}
			</label>
			<input
				className={`${parentClassName}__field`}
				id={`${parentClassName}__field`}
				type={inputType}
				placeholder={placeholder}
			/>
		</div>
	);
}
