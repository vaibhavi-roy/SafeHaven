import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
const userImage = require("../assets/images/User-white.png");
const menuImage = require("../assets/images/Menu-white.png");
const tickImage = require("../assets/images/Tick.png");



const Done = () => {
    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                height: "100%",
                width: "100 %",
                backgroundColor: "#7286D3"
            }}
        >

            <View
                style={{
                    position: 'absolute',
                    width: "100 %",
                    height: "40%",
                    elevation: 5,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    backgroundColor: "#FFF2F2"
                }}
            ></View>
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
                    marginTop: "70%",
                    marginLeft: "7%",
                    marginRight: "17%",
                    width: "90 %",
                    height: "35%",
                    elevation: 5,
                    borderRadius: 30,
                    backgroundColor: "white"
                }}
            ><Image
                    style={{
                        marginLeft: "28 %",
                        marginTop: "18 %",
                    }}
                    source={tickImage} />
            </View>

            <TouchableOpacity style={{
                flex: 1,
                justifyContent: "center",
                marginTop: "150%",
                marginBottom: "61%",
                marginLeft: "28%",
                elevation: 5,
                backgroundColor: "#fff",
                borderRadius: 50,
                borderColor: "grey",
                width: "45%",
                height: "10%"

            }}>
                <Text style={{
                    fontSize: 15,
                    color: "#7286D3",
                    fontWeight: "bold",
                    alignSelf: "center",
                }}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Done;