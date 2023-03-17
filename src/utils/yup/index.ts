import * as yup from "yup";
import { AppErrors } from "../../common/errors";

export const LoginSchema = yup.object().shape({
	email: yup.string().email(AppErrors.InvalidEmail).required(AppErrors.RequieredField),
	password: yup
		.string()
		.min(8, AppErrors.minLength)
		.required(AppErrors.RequieredField)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
			AppErrors.InvalidPassword
		),
});

export const RegisterSchema = yup.object().shape({
	email: yup.string().email(AppErrors.InvalidEmail).required(AppErrors.RequieredField),
	password: yup
		.string()
		.min(8, AppErrors.minLength)
		.required(AppErrors.RequieredField)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
			AppErrors.InvalidPassword
		),
	confirmPassword: yup
		.string()
		.min(8, AppErrors.minLength)
		.required(AppErrors.RequieredField)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
			AppErrors.InvalidPassword
		),
	name: yup.string().required(AppErrors.RequieredField),
	username: yup.string().required(AppErrors.RequieredField),
});
