import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

export default function EmailRegisterScreen() {

    const [email, setEmail] = useState("");
    const [isEmail, setIsEmail] = useState(false);
    const [otp, setOtp] = useState('');

    const handleVerifyOTP = () => {
        if (otp.length === 6) {
            Alert.alert('Success', 'OTP Verified Successfully!');
        } else {
            Alert.alert('Error', 'Please enter a valid 6-digit OTP.');
        }
    };

    return (
        <View style={styles.container}>

            {isEmail ?
                <>
                    <OTPTextInput
                        handleTextChange={(text) => setOtp(text)}
                        inputCount={6}
                        keyboardType="numeric"
                        tintColor="#7a11bf"
                        offTintColor="white"
                        textInputStyle={styles.otp}
                    />
                    <Text style={styles.resendText}>Didn't receive the OTP? <Text style={styles.resendLink}>Resend OTP</Text></Text>

                    <TouchableOpacity onPress={handleVerifyOTP} style={styles.loginButton}>
                        <Text style={styles.loginText}>Verify OTP</Text>
                    </TouchableOpacity>

                </> :
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Email"
                        placeholderTextColor="#ccc"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TouchableOpacity onPress={() => {
                        if (email) {
                            setIsEmail(true)
                        }
                    }} style={styles.loginButton}>
                        <Text style={styles.loginText}>Validate Email</Text>
                    </TouchableOpacity></>}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111'
    },
    input: {
        width: "100%",
        padding: 15,
        backgroundColor: "#222",
        color: "white",
        borderRadius: 15,
        marginBottom: 10,
        textAlign: "center"
    },
    loginButton: {
        width: "100%",
        padding: 15,
        backgroundColor: "#7a11bf",
        borderRadius: 15,
        alignItems: "center",
        marginVertical: 10,
    },
    loginText: {
        color: "white",
        fontSize: 14,
    },
    resendText: {
        marginTop: 20,
        fontSize: 14,
        color: '#666666',
    },
    resendLink: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    otp: {
        color: "white"
    }
});
