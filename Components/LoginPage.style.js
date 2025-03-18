import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
        paddingHorizontal: 10,
        gap: "0.5%"
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
        backgroundColor: "green",
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