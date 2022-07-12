import './Input.module.scss';

interface IInputProps {
	parentClassName: string;
	placeholder: string;
	labelText: string;
	type: string;
}

export function Input({
	parentClassName,
	placeholder,
	labelText,
	type
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
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
}
