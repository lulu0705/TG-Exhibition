import React from "react";
import { View, ScrollView, Text, Button, Image, StyleSheet } from "react-native";


const Observeroom = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={[styles.centeredView, styles.cactustitle]}>
                <Image source={require('../image/cactustitle.png')} />
                <Text style={styles.textstyle}>曉兔</Text>
                <Image source={require('../image/observerabbit.png')} style={styles.iconstyle1} />
            </View>
            <View style={styles.statecontainer}>
                <Image source={require('../image/heart_obs.png')} style={styles.heartstyle} />
                <Text style={styles.textstyle2}>MAX</Text>
                <Image source={require('../image/potted.png')} style={styles.pottedstyle} />
                <Text style={styles.textstyle2}>銅鑽</Text>
            </View>

            <View style={[styles.centeredView, styles.yellow1]}>
                <Image source={require('../image/yellowline.png')} style={styles.yellowline} />
                <Text style={styles.textstyle3}>參與過的活動</Text>
            </View>
            <View style={styles.messagebg}>
                <Image source={require('../image/purin.png')} style={styles.user} />
                <View style={styles.messagetext}>
                    <Text style={styles.messagetitle}>十月花博農民市集</Text>
                    <Text style={styles.messagecontent}>參與日期：10月15日(週六)</Text>
                </View>
                {/* <Text style={styles.activityplace}>活動地點</Text> */}
            </View>


            <View style={styles.messagebg}>
                <Image source={require('../image/purin.png')} style={styles.user} />
                <View style={styles.messagetext}>
                    <Text style={styles.messagetitle}>自助借書贈美食券</Text>
                    <Text style={styles.messagecontent}>參與日期：06月26日(週日)</Text>
                </View>
                {/* <Text style={styles.activityplace}>活動地點</Text> */}
            </View>
            <View style={styles.messagebg}>
                <Image source={require('../image/purin.png')} style={styles.user} />
                <View style={styles.messagetext}>
                    <Text style={styles.messagetitle}>讀享書香好滋味活動</Text>
                    <Text style={styles.messagecontent}>參與日期：03月12日(週二)</Text>
                </View>
                {/* <Text style={styles.activityplace}>活動地點</Text> */}
            </View>


            <View style={[styles.centeredView, styles.yellow2]}>
                <Image source={require('../image/yellowline.png')} style={styles.yellowline} />
                <Text style={styles.textstyle3}>養成心得</Text>
                <View style={styles.experiencebg}>
                    <Text style={styles.experiencecontent}>參加了好多活動才終於把曉兔養大，能成為仙中之王真是感動嗚嗚。</Text>
                </View>
            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAF2',
        alignItems: 'left',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 20,
    },
    cactustitle: {
        marginTop: 32,
    },

    textstyle: {
        fontSize: 20,
        color: "#705A31",
        fontWeight: "bold",
        paddingTop: 16,
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
        marginBottom:12,
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
    yellow1: {
        marginTop: 32,
    },

    yellow2: {
        marginTop: 8,
        marginBottom:50,
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
        // marginTop: 12,
        alignItems: "center",
        flexDirection: 'row',
    },
    experiencecontent: {
        width:222,
        fontSize: 16,
        color: "#705A31",
        justifyContent: "center",
        marginLeft: 32,
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
        backgroundColor: "#F8ECC1",
        borderRadius: 15,
        marginLeft: 63,
        marginBottom: 12,
        alignItems: "center",
        flexDirection: 'row',

    },
    messagetext: {
        // backgroundColor:'pink'
    },
    messagetitle: {
        color: "#705A31",
        paddingLeft: 13,
        fontSize: 20,
        fontWeight: "bold",
    },
    messagecontent: {
        color: "#705A31",
        fontSize: 13,
        paddingLeft: 13,
        paddingTop: 5,

    },
    activityplace: {
        color: "#705A31",
        fontSize: 13,
        paddingTop: 35,
        marginLeft: -20,
    },
    user: {
        width: 66,
        height: 66,
        marginLeft: 7,
        marginTop: 7,
        marginBottom: 7,

    },
});

export default Observeroom;