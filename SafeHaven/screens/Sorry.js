import { View, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
const userImage = require("../assets/images/User-white.png");
const menuImage = require("../assets/images/Menu-white.png");
const backImage = require("../assets/images/Back.png");
const settingsImage = require("../assets/images/Settings.png");

const Sorry = () => {
    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                height: "100%",
                width: "100 %",
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
                    "#c1b3ff",
                    "#ac99ff",
                    "#9780ff",
                    "#8266ff",
                    "#5833ff"

                ]}
                start={[0, 0]}
                end={[0.5, 1.5]}
                style={{
                    flex: 1,
                }}
            >
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
                                color: '#7286D3',
                                fontWeight: 'bold',
                            }}
                        >Anushka Yadav</Text>
                        <Image source={userImage} />
                    </View>
                </View>
                <View
                    style={{
                        position: 'absolute',
                        marginTop: "60%",
                        marginLeft: "7%",
                        marginRight: "17%",
                        width: "90 %",
                        height: "50%",
                        borderColor: "#fff",
                        borderWidth: 3,
                        elevation: 5,
                        borderRadius: 30,
                        backgroundColor: "#FFF2F2"

                    }}
                >
                    <Text
                        style={{
                            fontSize: 50,
                            color: '#7286D3',
                            marginTop: "25%",
                            marginLeft: "25%",
                            fontWeight: "bold"
                        }}
                    >
                        Sorry!!!!
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            color: '#7286D3',
                            marginTop: "10%",
                            marginLeft: "18%",
                            fontWeight: "bold"
                        }}
                    >
                        Still working on the page
                    </Text>
                </View>
                <View
                    style={{
                        marginRight: "5%",
                        marginLeft: "5%",
                        marginTop: "210%",
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Image source={backImage}
                        style={{
                            width: "10%",
                            height: "55%"
                        }}

                    />
                    <Image source={settingsImage}
                        style={{
                            marginLeft: "70%",
                            width: "12%",
                            height: "70%",
                        }}
                    />

                </View>
            </LinearGradient>
        </View>
    )
}

export default Sorry;