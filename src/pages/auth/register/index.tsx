import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { IPropsRegister } from "../../../common/types/auth";
import { useStyles } from "./styles";
import AppLoadingButton from "../../../components/loading-button";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
	const { navigate, register, errors, loading } = props;
	const classes = useStyles()
	return (
		<>
			<Typography variant="h2" textAlign="center">
				Регистрация
			</Typography>
			<Typography variant="body1" marginBottom={3} textAlign="center">
				Введите данные для регистрации
			</Typography>
			<Box marginBottom={2}>
				<TextField
					error={!!errors.name}
					fullWidth={true}
					margin="normal"
					label="Имя"
					variant="outlined"
					placeholder="Введите ваше имя"
					helperText={errors.name ? `${errors.name.message}` : ""}
					{...register("name")}
				/>
				<TextField
					error={!!errors.username}
					fullWidth={true}
					margin="normal"
					label="Username"
					variant="outlined"
					placeholder="Введите ваш username"
					helperText={errors.username ? `${errors.username.message}` : ""}
					{...register("username")}
				/>
				<TextField
					error={!!errors.email}
					fullWidth={true}
					margin="normal"
					label="Email"
					variant="outlined"
					placeholder="Введите ваш email"
					helperText={errors.email ? `${errors.email.message}` : ""}
					{...register("email")}
				/>
				<TextField
					error={!!errors.password}
					type="password"
					fullWidth={true}
					margin="normal"
					label="Password"
					variant="outlined"
					placeholder="Введите ваш пароль"
					helperText={errors.password ? `${errors.password.message}` : ""}
					{...register("password")}
				/>
				<TextField
					error={!!errors.confirmPassword}
					type="password"
					fullWidth={true}
					margin="normal"
					label="Password"
					variant="outlined"
					placeholder="Повторите ваш пароль"
					helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ""}
					{...register("confirmPassword")}
				/>
			</Box>
			<AppLoadingButton loading={loading} type="submit" variant="contained">
				Регистрация
			</AppLoadingButton>
			<Box margin="20px 0">
				<Typography variant="body1">
					У вас ecть аккаунт?
					<span className={classes.incitingText} onClick={() => navigate("/login")}>
						Авторизация
					</span>
				</Typography>
			</Box>
		</>
	);
};

export default RegisterPage;
