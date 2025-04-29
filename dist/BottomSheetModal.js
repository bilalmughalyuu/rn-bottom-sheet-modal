import { Modal, TouchableOpacity, StyleSheet, Animated, Easing, Dimensions, View, Platform, StatusBar, } from "react-native";
import { useEffect, useRef } from "react";
import React from "react";
const { height } = Dimensions.get("window");
const BottomSheetModal = ({ modalVisible, onClose, children, }) => {
    const slideAnim = useRef(new Animated.Value(height)).current;
    useEffect(() => {
        if (modalVisible) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 250,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        }
    }, [modalVisible]);
    const closeModal = () => {
        Animated.timing(slideAnim, {
            toValue: height,
            duration: 250,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
        }).start(() => {
            onClose(false);
        });
    };
    const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;
    return (React.createElement(Modal, { visible: modalVisible, transparent: true, animationType: "none", statusBarTranslucent: true, navigationBarTranslucent: true, onRequestClose: closeModal },
        React.createElement(View, { style: [styles.container, { paddingTop: statusBarHeight }] },
            React.createElement(TouchableOpacity, { style: styles.modalOverlay, activeOpacity: 1, onPress: closeModal },
                React.createElement(Animated.View, { style: [
                        styles.contentContainer,
                        {
                            transform: [{ translateY: slideAnim }],
                        },
                    ] }, children)))));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: "flex-end",
    },
    contentContainer: {},
});
export default BottomSheetModal;
