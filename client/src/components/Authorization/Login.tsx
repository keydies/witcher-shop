import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';

export function Login() {
	return (
		<form
			className='login'
			method='post'
			onSubmit={event => event.preventDefault()}
		>
			<Input
				parentClassName='email'
				placeholder='example@gmail.com'
				labelText='Your email:'
				type='text'
			/>
			<Input
				parentClassName='password'
				placeholder='Enter your password...'
				labelText='Your password:'
				type='password'
			/>
			<Button buttonText='Log In' buttonClassName='login-btn' />
		</form>
	);
}
