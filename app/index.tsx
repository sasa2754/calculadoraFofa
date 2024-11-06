import { Button } from "@/components/Button/buttons";
import { Dimensions, SafeAreaView, StyleSheet, View, Image } from "react-native";
const { width, height } = Dimensions.get('window');

const colorIcon = "#BE3F89FF";
const colorNumber = "#6B2A52FF";
const colorEqual = "#FF1AB3FF";

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#3B1A34FF',
       flex: 1,
       alignItems: 'center',
    //    justifyContent: 'center'
    },

    box: {
        alignItems: 'center'
    },

    buttonBox: {
        flex: 2,
        flexDirection: 'row',
        width: '100%',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: "wrap",
        padding: 5,
        paddingVertical: 10
    },

    inputBox: {
        flex: 2,
        backgroundColor: '#4D1A42C0',
        width: '95%',
        marginTop: 10,
        borderRadius: 12,
    },

    line: {
        width: '93%',
        height: 1,
        backgroundColor: '#FFFFFF5E'
    },

    iconBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 15,
        marginVertical: 8
    },

    icon: {
        width: width / 14,
        height: height / 18
    }

});

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputBox}>

            </View>

            <View style={styles.box}>

                <View style={styles.iconBox}>
                    <View style={{flexDirection: 'row', gap: 14}}>
                        <Image style={styles.icon} source={require('@/assets/images/relogio.png')} resizeMode="contain"></Image>
                        <Image style={styles.icon} source={require('@/assets/images/regua.png')} resizeMode="contain"></Image>
                    </View>
                    <Image style={styles.icon} source={require('@/assets/images/apagar.png')} resizeMode="contain"></Image>
                </View>

                <View style={styles.line}></View>

                <View style={styles.buttonBox}>
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"C"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"()"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"%"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"/"} colorText={"#ffffff"} />

                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"9"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"8"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"7"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"*"} colorText={"#ffffff"} />

                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"4"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"5"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"6"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"-"} colorText={"#ffffff"} />

                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"1"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"2"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"3"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"+"} colorText={"#ffffff"} />

                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"+/-"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"0"} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"."} colorText={"#ffffff"} />
                    <Button width={width / 4.5} height={height / 11} color={colorEqual} text={"="} colorText={"#ffffff"} />

                </View>
            </View>

        </SafeAreaView>
    );
}

