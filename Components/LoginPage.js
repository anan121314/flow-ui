import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Logo from '../assets/dummy-logo.svg';
import * as Google from "expo-auth-session/providers/google";
import * as SecureStore from "expo-secure-store";
import { styles } from "./LoginPage.style"

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [ssoResponse, setssoResponse] = useState(null)

    const config = {
        androidClientId: "829611888618-ubjs23118k1uc2134atqelkdcvt3cngv.apps.googleusercontent.com",
    }
    const [request, response, promptAsync] = Google.useAuthRequest(config);

    useEffect(() => {
        handleToken()
    }, [response]);

    const handleToken = () => {
        if (response?.type === "success") {
            const { authentication } = response;
            const token = authentication?.idToken;
            if (token) {
                sendTokenToBackend(token);
            } else {
                console.error("No ID token received");
            }
        }
    }

    const sendTokenToBackend = async (idToken) => {
        try {
            let res = await fetch("http:35.206.81.175:8080/auth/google/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "id_token": idToken }),
            });
            let data = await res.json();
            console.log(data)
            if (data.status_code === 200 && data.status === 'Success') {
                const { access_token, id, is_new_user } = data.data;
                Alert.alert("Login Successful", access_token);
            } else {
                Alert.alert("Login Failed", data.message);
            }
        } catch (error) {
            Alert.alert("Error occured", error)
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Flow !</Text>
            <Logo width={100} height={100} fill="white" style={styles.logo} />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#ccc"
                value={email}
                onChangeText={setEmail}
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={20} color="#ccc" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.optionsContainer}>
                <TouchableOpacity>
                    <Text style={styles.optionText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.optionText}>Create Account</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divider}>
                <View style={styles.line} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} />
            </View>

            <TouchableOpacity style={[styles.authButton, styles.transparentButton]}>
                <FontAwesome name="apple" size={20} color="black" />
                <Text style={styles.authButtonText}>Sign in with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={!request} onPress={() => promptAsync()} style={[styles.authButton, styles.transparentButton]}>
                <FontAwesome name="google" size={20} color="blue" />
                <Text style={styles.authButtonText}>Sign in with Google</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
                By continuing, you agree to Flow's <Text style={styles.link}>Terms of Service</Text> and{" "}
                <Text style={styles.link}>Privacy Policy</Text>
            </Text>
        </View>
    );
}
