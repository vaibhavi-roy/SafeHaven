import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';


const userImage = require("../assets/images/User-white.png");
const menuImage = require("../assets/images/Menu-white.png");
const writeImage = require("../assets/images/write.png")
const backImage = require("../assets/images/Back.png");
const settingsImage = require("../assets/images/Settings.png");

const Privacy = () => {


    // const [name, setName] = React.useState('')
    // const [isEditing, setIsEditing] = React.useState(false)
    // const [editID, setEditID] = React.useState(null)


    // const editItem = (id) => {
    //     const specificItem = list.find((item) => item.id === id);
    //     setIsEditing(true);
    //     setEditID(id)
    //     setName(specificItem.title)

    //     if (name && isEditing) {
    //         setList(
    //             list.map((item) => {
    //                 if (item.id === editID) {
    //                     return { ...item, title: name }
    //                 }
    //                 return item
    //             })
    //         )
    //         setName('');
    //         setEditID(null);
    //         setIsEditing(false);
    //     }
    // }

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
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#FFF2F2",
                    "#E5E0FF",
                    "#E5E0FF",
                    "#E5E0FF",
                    "#eae6ff",
                    "#d5ccff",
                    "#D1C7FF",
                    "#c1b3ff",


                ]}
                start={[-1, 0]}
                end={[1, 0.8]}
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
                        marginTop: "30%",
                        marginLeft: "8%",
                        width: "80%",
                        height: "100%"
                    }}
                >
                    <Text
                        style={{
                            position: 'absolute',
                            fontSize: 30,
                            color: '#7286D3',
                            fontWeight: 'bold',
                        }}
                    >We Honour Your Privacy</Text>

                    <Text
                        style={{
                            position: 'absolute',
                            marginTop: "38%",
                            fontSize: 20,
                            color: '#7286D3',
                            fontWeight: 'bold',
                        }}
                    >Incidents You Reported</Text>
                </View>

                <View
                    style={{
                        position: 'absolute',
                        marginTop: "70%",
                        marginLeft: "5%",
                        width: "90 %",
                        height: "28%",
                        borderRadius: 5,
                        elevation: 5,
                        borderBottomEndRadius: 30,
                        borderTopEndRadius: 30,
                        borderTopLeftRadius: 30,
                        backgroundColor: "white"
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            marginTop: "15%",
                            marginLeft: "10%",
                            marginRight: "20%",
                            width: "90%",
                            height: "100%",


                        }}
                    >

                        <Text
                            style={{
                                width: "50%",
                                fontSize: 15,
                                color: '#7286D3',
                                fontWeight: 'bold',
                            }}
                        >
                            Location:Kolkata Date:11/6/2022
                        </Text>
                        <Text
                            style={{
                                fontSize: 12,
                                color: '#7286D3',
                                marginTop: "5%"
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                        {/* <TextInput value={name} onChange={(e) => setName(e.target.valueOf)} /> */}
                        {/* <Button type='submit' className='submit-btn' onPress={editItem} title="">{isEditing ? 'edit' : 'submit'} */}
                        <Image source={writeImage}
                            style={{
                                marginLeft: "88%",
                                marginTop: "8%",
                                width: "13%",
                                height: "15%"
                            }}
                        />
                        {/* </Button> */}
                    </View>
                </View>

                <View
                    style={{
                        position: 'absolute',
                        marginTop: "140%",
                        marginLeft: "5%",
                        width: "90 %",
                        height: "20%",
                        borderRadius: 5,
                        elevation: 5,
                        borderBottomEndRadius: 30,
                        borderTopEndRadius: 30,
                        borderTopLeftRadius: 30,
                        backgroundColor: "white"
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            marginTop: "15%",
                            marginLeft: "10%",
                            marginRight: "20%",
                            width: "90%",
                            height: "100%",


                        }}
                    >
                        <Text
                            style={{
                                width: "50%",
                                fontSize: 15,
                                color: '#7286D3',
                                fontWeight: 'bold',
                            }}
                        >
                            Location:Kolkata Date:1/1/2023
                        </Text>
                        <Text
                            style={{
                                fontSize: 12,
                                color: '#7286D3',
                                marginTop: "5%"
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Image source={writeImage}
                            style={{
                                marginLeft: "88%",
                                width: "13%",
                                height: "20%"
                            }}
                        />
                    </View>
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
                            height: "50%"
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

const styles = StyleSheet.create({})

export default Privacy;



