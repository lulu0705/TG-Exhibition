import React from "react";
import { ScrollView, StyleSheet, Image, Text, View, TextInput } from "react-native";

const Messageboard = () => {

    return (
        <ScrollView>
            <View style={styles.centeredView}>
                <Text style={styles.textstyle}>曉兔</Text>
                <Image source={require('../image/observerabbit.png')} style={styles.iconstyle1} />
            </View>
            <View style={styles.statecontainer}>
                <Image source={require('../image/heart_obs.png')} style={styles.heartstyle} />
                <Text style={styles.textstyle2}>MAX</Text>
                <Image source={require('../image/potted.png')} style={styles.pottedstyle} />
                <Text style={styles.textstyle2}>銅鑽</Text>
            </View>
            <View style={styles.centeredView}>
                <Image source={require('../image/yellowline.png')} style={styles.yellowline} />
            </View>



            <View style={styles.msgcontainer}>
                <View style={styles.boardbg}>
                    <View style={styles.messagebg}>
                        <Image source={require('../image/user1.png')} style={styles.user} />
                        <View style={styles.messagetext}>
                            <Text style={styles.messagetitle}>小伊</Text>
                            <Text style={styles.messagecontent2}>好可愛的仙人掌!!!</Text>
                        </View>

                    </View>
                    <View style={styles.msg}>
                        <Image source={require('../image/arrow.png')} style={styles.arrowstyle} />
                        <Text style={styles.messagecontent}>回覆(3)</Text>
                        <Image source={require('../image/heart2.png')} style={styles.heart2style} />
                        <Text style={styles.messagecontent}>喜歡(4)</Text>
                        <Text style={styles.messagecontent3}>2022.09.09</Text>
                    </View>
                    <View style={styles.messagebg}>
                        <Image source={require('../image/user2.png')} style={styles.user} />
                        <View style={styles.messagetext}>
                            <Text style={styles.messagetitle}>阿酷</Text>
                            <Text style={styles.messagecontent2}>好有互動感!!!</Text>
                        </View>

                    </View>
                    <View style={styles.msg}>
                        <Image source={require('../image/arrow.png')} style={styles.arrowstyle} />
                        <Text style={styles.messagecontent}>回覆(1)</Text>
                        <Image source={require('../image/heart2.png')} style={styles.heart2style} />
                        <Text style={styles.messagecontent}>喜歡(1)</Text>
                        <Text style={styles.messagecontent3}>2022.09.09</Text>
                    </View>
                    <View style={styles.messagebg}>
                        <Image source={require('../image/user3.png')} style={styles.user} />
                        <View style={styles.messagetext}>
                            <Text style={styles.messagetitle}>榮榮</Text>
                            <Text style={styles.messagecontent2}>好可愛的仙人掌!!!</Text>
                        </View>

                    </View>
                    <View style={styles.msg}>
                        <Image source={require('../image/arrow.png')} style={styles.arrowstyle} />
                        <Text style={styles.messagecontent}>回覆(1)</Text>
                        <Image source={require('../image/heart2.png')} style={styles.heart2style} />
                        <Text style={styles.messagecontent}>喜歡(1)</Text>
                        <Text style={styles.messagecontent3}>2022.10.01</Text>
                    </View>
                    {/* <View style={styles.createcontainer}>
                        <TextInput placeholder=" 新增留言..." style={styles.createmessage}></TextInput>
                        <Image source={require('../image/createbutton.png')} style={styles.createbutton} />
                    </View> */}
                    
                    <View style={styles.messagebg2}>
                        <Image source={require('../image/user1.png')} style={styles.user} />
                        <View style={styles.messagetext}>
                            <Text style={styles.messagetitle}>我</Text>
                            <Text style={styles.messagecontent2}>謝謝你!</Text>
                            </View>
                    </View>
                    <View style={styles.msg2}>
                    <Image source={require('../image/arrow.png')} style={styles.arrowstyle} />
                        <Text style={styles.messagecontent}>回覆</Text>
                        <Image source={require('../image/spaceheart.png')} style={styles.heart2style} />
                        <Text style={styles.messagecontent}>喜歡         </Text>
                        <Text style={styles.messagecontent3}>2022.10.01</Text>
                        </View>

                </View>

            </View>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAF2',
        alignItems: 'left',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    msgcontainer: {
        flex: 1,
        alignItems: "center",
        marginBottom:50,
    },
    msg: {

        flexDirection: 'row',
        marginRight: 0
    },
    msg2: {
        flexDirection: 'row',
    },
    messagebg2: {
        width: 260,
        height: 73,
        backgroundColor: "#FFFAF2",
        borderRadius: 15,
        marginTop: 22,

        alignItems: "center",
        flexDirection: 'row',
    },

    boardbg: {
        marginTop: 22,
        backgroundColor: "#F8ECC1",
        width: 326,
        height: 540,
        borderRadius: 17,
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    textstyle: {
        fontSize: 20,
        color: "#705A31",
        fontWeight: "bold",
        paddingTop: 16,
        marginBottom: 8,
    },
    textstyle2: {
        fontSize: 16,
        color: "#705A31",
        paddingTop: 21,
        paddingLeft: 12,
    },
    textstyle3: {
        fontSize: 16,
        color: "#705A31",
        paddingTop: 16,
    },

    iconstyle1: {
        marginTop: 6,
    },
    heartstyle: {
        marginLeft: 107,
        marginTop: 23,
    },
    pottedstyle: {
        marginLeft: 37,
        marginTop: 26,
    },
    statecontainer: {
        flexDirection: "row",
    },
    yellowline: {
        width: 326,
    },
    iconstyle3: {
        width: 110,
        height: 71,
    },
    experiencebg: {
        width: 286,
        height: 114,
        backgroundColor: "#F8ECC1",
        borderRadius: 15,
        marginTop: 12,
        alignItems: "center",
        flexDirection: 'row',
    },
    experiencecontent: {
        fontSize: 16,
        color: "#705A31",
        justifyContent: "center",
        marginLeft: 10,
    },
    brownlinestyle: {
        width: 390,
        height: 19,
    },

    brownlineview: {
        marginTop: -8,
    },
    brownlineview1: {
        marginTop: -7,
    },
    bgcolor: {
        backgroundColor: '#FFFAF2',
    },
    finish: {
        width: 110,
        height: 73,
    },
    finishview: {
        alignItems: 'center'
    },
    paddingbottom: {
        margin: 0,
    },
    messagebg: {
        width: 286,
        height: 80,
        backgroundColor: "#FFFAF2",
        borderRadius: 15,
        marginTop: 22,

        alignItems: "center",
        flexDirection: 'row',

    },
    messagetext: {

    },
    messagetitle: {
        color: "#705A31",
        paddingLeft: 23,
        fontSize: 12,
        fontWeight: "bold",
    },
    messagecontent: {
        color: "#705A31",
        fontSize: 13,
        paddingLeft: 10,
        paddingTop: 8,

    },
    messagecontent2: {
        color: "#705A31",
        fontSize: 13,
        paddingLeft: 22,
        paddingTop: 8,

    },
    messagecontent3: {
        color: "#62935F",
        fontSize: 13,
        paddingLeft: 10,
        paddingTop: 8,

    },
    activityplace: {
        color: "#705A31",
        fontSize: 13,
        paddingTop: 35,
        marginLeft: -20,
    },
    user: {
        width: 58,
        height: 58,
        marginLeft: 19,
        marginTop: 7,
        marginBottom: 7,

    },
    arrowstyle: {
        marginTop: 8,
        marginLeft: 18
    },
    heart2style: {
        marginTop: 10,
        marginLeft: 12,
    },
    createmessage: {
        width: 254,
        height: 48,
        backgroundColor: "#F5F5F5",
        borderRadius: 13,
        marginLeft: 16,
        marginTop: 19,
    },
    createcontainer: {
        flexDirection: "row",
    },
    createbutton: {
        width: 26,
        height: 26,
        marginLeft: 9,
        marginTop: 30,
    },
});
export default Messageboard;