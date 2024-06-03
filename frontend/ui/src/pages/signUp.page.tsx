import {Box, Button, Text, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useNavigate} from "react-router-dom";


export function SignUp() {

	// const {mutate: register, status} = useRegister({
	// 	mutation: {
	// 		onSuccess: (data) => {
	// 			const {_id: userId, firstName, lastName, email, type} = data.user
	// 			setAuthToken(data.tokens.access.token)
	// 			validateUser({userId, firstName, lastName, email, type, authToken: data.tokens.access.token})
	// 		},
	// 		onError: (error) => {
	// 			console.log(error)
	// 		}
	// 	}
	// })
	const navigate = useNavigate()
	const form = useForm({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		},
		validate: {
			firstName: (value) => (value ? null : 'First name is required'),
			lastName: (value) => (value ? null : 'Last name is required'),
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			password: (value) => ('Password must contain at least 8 characters, one uppercase letter and one special character')
		}
	})

	const formSubmit = (values: any) => {
		// register({data: {...values, type: UserEntityType.CUSTOMER}})
	}
	return (
		<form onSubmit={form.onSubmit((values) => formSubmit(values))}>
			<Box>
				<Text mt={'xl'} fz={'30px'}>Signup</Text>
				<Text mt={'xl'}>First Name</Text>
				<TextInput size={'md'} {...form.getInputProps('firstName')}/>
				<Text mt={'xl'}>Last Name</Text>
				<TextInput size={'md'} {...form.getInputProps('lastName')}/>
				<Text mt={'xl'}>Email</Text>
				<TextInput size={'md'} {...form.getInputProps('email')}/>
				<Text mt={'xl'}>Password</Text>
				{/*<PasswordStrength form={form}/>*/}
				<Button my={'xl'} variant={'filled'} size={'md'} fullWidth type={'submit'} loading={status === 'pending'}>Sign up</Button>
				<Button my={'xl'} variant={'outline'} size={'md'} fullWidth loading={status === 'pending'} onClick={() => navigate('/auth/login')}>Login</Button>
			</Box>
		</form>
	)

}