import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/UserHook";

const LoginScreen = () => {
	const navigation = useNavigation();
	const { signIn } = useAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		if (!email || !password) {
			return alert("Please fill in all fields");
		}

		try {
			signIn(email, password);
		} catch (error) {
			console.error("Error signing in:", error);
			return alert("Error signing in: " + error.message || "An error occurred");
		}

		setEmail("");
		setPassword("");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
				style={styles.input}
				placeholder='Email'
				value={email}
				onChangeText={setEmail}
				autoCapitalize='none'
				keyboardType='email-address'
			/>
			<TextInput
				style={styles.input}
				placeholder='Password'
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.buttonSecondary}
				onPress={() => navigation.navigate("Register")}>
				<Text>Don't have an account? Register</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		width: "80%",
		height: 50,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 10,
		paddingHorizontal: 15,
		marginBottom: 20,
		fontSize: 16,
	},
	button: {
		width: "80%",
		height: 50,
		backgroundColor: "#007bff",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
	},
	buttonSecondary: {
		marginTop: 20,
	},
});

export default LoginScreen;
