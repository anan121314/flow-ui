import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Logo from '../assets/dummy-logo.svg';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

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

            <TouchableOpacity style={[styles.authButton, styles.transparentButton]}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
        paddingHorizontal: 10,
    },
    title: {
        color: "white",
        fontSize: 20,
        marginBottom: 5,
    },
    logo: {
        marginBottom: 20,
    },
    input: {
        width: "100%",
        padding: 12,
        backgroundColor: "#222",
        color: "white",
        borderRadius: 15,
        marginBottom: 10,
    },
    passwordContainer: {
        position: "relative",
        width: "100%",
    },
    eyeIcon: {
        position: "absolute",
        right: 15,
        top: 12,
    },
    loginButton: {
        width: "100%",
        padding: 12,
        backgroundColor: "#A855F7",
        borderRadius: 15,
        alignItems: "center",
        marginVertical: 10,
    },
    loginText: {
        color: "white",
        fontSize: 14,
    },
    optionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 15,
    },
    optionText: {
        color: "#aaa",
        fontSize: 12,
        padding: 10
    },
    divider: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#444",
    },
    orText: {
        color: "#aaa",
        marginHorizontal: 10,
    },
    authButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 12,
        borderRadius: 15,
        backgroundColor: "#222",
        marginVertical: 5,
    },
    transparentButton: {
        backgroundColor: "rgb(239, 239, 245)",
        borderWidth: 1,
        borderColor: "rgb(224, 224, 235)",
    },
    authButtonText: {
        color: "black",
        marginLeft: 10,
        fontSize: 14,
    },
    termsText: {
        color: "#aaa",
        fontSize: 12,
        textAlign: "center",
        marginBottom: 15,
        marginTop: 15
    },
    link: {
        color: "white",
        fontWeight: "bold",
    },
});