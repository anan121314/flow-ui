import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <LottieView
                source={require("../assets/wallet.json")}
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
    },
    animation: {
        width: 300,
        height: 300,
    },
});
