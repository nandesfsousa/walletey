import React, { useState, useEffect } from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    Keyboard,
    StyleSheet
} from 'react-native';

export default function Account() {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));

    useEffect(() => {
        keyboardDidShowListener
            = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

        keyboardDidHideListener
            = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        // Animações em paralelo
        Animated.parallel([
            // Fornece um modelo de física básico (efeito mola/estilingue)
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20
            }),

            // Anima um valor ao longo do tempo
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200
            })
        ]).start();
    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 95,
                duration: 100
            }),

            Animated.timing(logo.y, {
                toValue: 105,
                duration: 100
            })
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 170,
                duration: 100
            }),

            Animated.timing(logo.y, {
                toValue: 195,
                duration: 100
            })
        ]).start();
    };

    return (
        <>
            <KeyboardAvoidingView >
                <View>
                    <Animated.Image
                        style={{
                            width: logo.x,
                            height: logo.y
                        }}
                        source={require('../assets/adaptive-icon.png')}
                    />
                </View>

                <Animated.View style={[
                    styles.form,
                    {
                        opacity: opacity,
                        transform: [
                            {
                                translateY: offset.y
                            }
                        ]
                    }
                ]}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        //keyboardType="visible-password"
                        textContentType="password"
                        autoCapitalize="none"
                        autoCompleteType="password"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={() => { }}
                    />

                    <TouchableOpacity style={styles.buttonSubmit}>
                        <Text style={styles.submitText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister}>
                        <Text style={styles.registerText}>Criar conta gratuita</Text>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },

    containerLogo: {
        flex: 1,
        justifyContent: 'center'
    },

    /*
    logo: {
      width: 170,
      height: 195
    },
    */

    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 25
    },

    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 22,
        borderRadius: 7,
        padding: 10
    },

    buttonSubmit: {
        backgroundColor: '#59BFFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },

    submitText: {
        color: '#FFF',
        fontSize: 19
    },

    buttonRegister: {
        marginTop: 10
    },

    registerText: {
        color: '#FFF'
    }
});