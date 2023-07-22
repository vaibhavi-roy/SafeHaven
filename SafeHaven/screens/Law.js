import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
const lawImage = require("../assets/images/Law-image.jpg");
const userImage = require("../assets/images/User.png");
const menuImage = require("../assets/images/Menu.png");
const backImage = require("../assets/images/Back.png");
const settingsImage = require("../assets/images/Settings.png");


export default function Law() {
    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                height: "100%",
                width: "100 %"
            }}
        >
            <LinearGradient
                colors={[
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#E5E0FF",
                    "#E5E0FF",
                    "#D1C7FF",
                    "#c1b3ff",
                    "#ac99ff",
                    "#9780ff"

                ]}
                start={[0, 0]}
                end={[0.5, 1.2]}
                style={{
                    flex: 1,
                }}
            >

                <Image source={lawImage}
                    style={{
                        width: "100%",
                        height: "57%",
                        borderWidth: 5,
                        borderBottomRightRadius: 100,
                        opacity: 0.9,

                    }} />


                <View
                    style={{
                        position: 'absolute',
                        width: '100 %',
                        marginTop: '12%',
                        marginLeft: "5%",
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between'

                    }}
                >
                    <Image source={menuImage} />

                    <View
                        style={{
                            marginRight: '10%',
                            flex: 1,
                            justifyContent: 'flex-end',
                            flexDirection: 'row',
                            flexWrap: 'wrap',

                        }}
                    >
                        <Text
                            style={{
                                position: 'absolute',
                                top: 8,
                                right: 45,
                                fontSize: 15,
                                color: '#fff',
                                fontWeight: 'bold',
                            }}
                        >Anushka Yadav</Text>
                        <Image source={userImage} />
                    </View>

                </View>
                <View
                    style={{
                        position: 'absolute',
                        marginTop: "30%",
                        marginLeft: "5%",
                        width: "80%",
                        height: "100%"
                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >KNOW THE LAW</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >Get Your Justice</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            color: 'white',
                            fontWeight: 'bold',
                            marginTop: "60%",
                            textDecorationLine: 'underline'
                        }}
                    >Read now</Text>
                </View>


                <View
                    style={{
                        marginTop: "15%"
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            padding: 28,
                            borderWidth: 2,
                            borderRadius: 30,
                            borderColor: '#fff',
                            width: "92%",
                            marginLeft: "4%"

                        }}
                    >
                        <Text
                            style={{
                                position: 'absolute',
                                marginLeft: "15%",
                                fontSize: 12,
                                color: '#7286D3',
                                fontWeight: 'bold',
                            }}
                        >Be aware of Culprits Verified By the Police</Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            padding: 28,
                            borderWidth: 2,
                            borderRadius: 30,
                            borderColor: '#fff',
                            width: "92%",
                            marginLeft: "4%",
                            marginTop: "5 %"

                        }}
                    >
                        <Text
                            style={{
                                position: 'absolute',
                                marginLeft: "35%",
                                fontSize: 12,
                                color: '#7286D3',
                                fontWeight: 'bold',
                            }}
                        >Educational Resources</Text>
                    </View>
                </View>
                <View
                    style={{
                        marginRight: "5%",
                        marginLeft: "5%",
                        marginTop: "25%",
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between'



                    }}
                >
                    <Image source={backImage}
                        style={{
                            width: "12%",
                            height: "50%",
                        }}
                    />
                    <Image source={settingsImage}
                        style={{
                            marginLeft: "70%",
                            width: "15%",
                            height: "60%",
                        }}
                    />

                </View>
            </LinearGradient >
        </View >
    )
}

const styles = StyleSheet.create({
    law: {},
    lawElevated: {},
})