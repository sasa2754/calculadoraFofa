import { Button } from "@/components/Button/buttons";
import { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, View, Image, Alert, TextInput } from "react-native";
import math from 'mathjs';
const { width, height } = Dimensions.get('window');

const colorIcon = "#BE3F89FF";
const colorNumber = "#6B2A52FF";
const colorEqual = "#FC3ABBFF";

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#3B1A34FF',
       flex: 1,
       alignItems: 'center',
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
        padding: 10
    },

    input: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
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
    const [number, setNumber] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [operationSignal, setOperationSignal] = useState<string>('');
    const [inputText, setInputText] = useState<string>('');
    const [prevNumber, setPrevNumber] = useState<number | null>(null);
    const [operation, setOperation] = useState<string>('');

    useEffect(() => {
        console.log(number, operationSignal)
        setTotal(prevTotal => calc(prevTotal, number, operationSignal));
        console.log("total: " + total)
        return () => {
            
        }
    }, [number, operationSignal])
    


    // const operation = (operation: string) => {
    //     // console.log("Apertou aqui viu: " + operation)
    //     if (operation === "=") {
    //         setTotal(calc(total, number, operationSignal));
    //         setInputText(String(total));
    //         setNumber(0);
    //         setOperationSignal("");
    //     }
    //     else if (operation === "C") {
    //         setInputText("");
    //         setNumber(0);
    //         setOperationSignal("");
    //     }
    //     else {
    //         setOperationSignal(operation);
    //         setInputText("");
    //         setNumber(Number(inputText));
    //         return operation;
    //     }
    // }

    const addNumber = (number: string) => {
        setInputText(prevText => prevText + number);
    }

    const calc = (number1: number, number2: number, operation: string): number => {
        switch (operation) {
            case "+":
                return number1 + number2;
                break;

            case "-":
                return number1 - number2;
                break;

            case "*":
                return number1 * number2;
                break;

            case "/":
                return number1 / number2;
                break;

            // case "%":
            //     return (number1 / number2) * 100;
            //     break;
        
            default:
                return 0;
                break;
        }
    }

    const handleOperation = (op: string) => {
        if (op === "=") {
            // Quando pressionado '=', realiza o cálculo
            if (prevNumber !== null && inputText !== '') {
                const currentNumber = parseFloat(inputText);
                const result = calc(prevNumber, currentNumber, operation);
                setInputText(result.toString());
                setPrevNumber(null);
                setOperation('');
            }
        } else if (op === "C") {
            // Limpar tudo
            setInputText('');
            setPrevNumber(null);
            setOperation('');
        } else {
            // Quando uma operação é pressionada, salva o número anterior e a operação
            if (inputText !== '') {
                setPrevNumber(parseFloat(inputText)); // Salva o número atual
                setInputText(''); // Limpa o display para o próximo número
                setOperation(op); // Define a operação
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} value={inputText} onChangeText={setInputText} keyboardType="numeric"/>
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
                    {/* <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"C"} colorText={"#ffffff"} onPress={operation}/>
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"()"} colorText={"#ffffff"} onPress={operation}/>
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"%"} colorText={"#ffffff"} onPress={operation}/>
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"/"} colorText={"#ffffff"} onPress={operation}/>

                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"9"} colorText={"#ffffff"} onPress={addNumber}/>
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"8"} colorText={"#ffffff"} onPress={addNumber}/>
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"7"} colorText={"#ffffff"} onPress={addNumber}/>
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"*"} colorText={"#ffffff"} onPress={operation}/>

                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"4"} colorText={"#ffffff"} onPress={addNumber}/>
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"5"} colorText={"#ffffff"} onPress={addNumber}/>
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"6"} colorText={"#ffffff"} onPress={addNumber}/>
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"-"} colorText={"#ffffff"} onPress={operation}/>

                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"1"} colorText={"#ffffff"} onPress={addNumber}/>
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"2"} colorText={"#ffffff"} onPress={addNumber}/>
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"3"} colorText={"#ffffff"} onPress={addNumber}/>
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"+"} colorText={"#ffffff"} onPress={operation}/>

                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"+/-"} colorText={"#ffffff"} onPress={operation}/>
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"0"} colorText={"#ffffff"} onPress={addNumber}/>
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"."} colorText={"#ffffff"} onPress={operation}/>
                    <Button width={width / 4.5} height={height / 11} color={colorEqual} text={"="} colorText={"#ffffff"} onPress={operation}/> */}
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"C"} colorText={"#ffffff"} onPress={() => handleOperation("C")} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"()"} colorText={"#ffffff"} onPress={() => handleOperation("C")} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"%"} colorText={"#ffffff"} onPress={() => handleOperation("%")} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"/"} colorText={"#ffffff"} onPress={() => handleOperation("/")} />

                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"7"} colorText={"#ffffff"} onPress={() => addNumber("7")} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"8"} colorText={"#ffffff"} onPress={() => addNumber("8")} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"9"} colorText={"#ffffff"} onPress={() => addNumber("9")} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"*"} colorText={"#ffffff"} onPress={() => handleOperation("*")} />

                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"4"} colorText={"#ffffff"} onPress={() => addNumber("4")} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"5"} colorText={"#ffffff"} onPress={() => addNumber("5")} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"6"} colorText={"#ffffff"} onPress={() => addNumber("6")} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"-"} colorText={"#ffffff"} onPress={() => handleOperation("-")} />

                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"1"} colorText={"#ffffff"} onPress={() => addNumber("1")} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"2"} colorText={"#ffffff"} onPress={() => addNumber("2")} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"3"} colorText={"#ffffff"} onPress={() => addNumber("3")} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"+"} colorText={"#ffffff"} onPress={() => handleOperation("+")} />

                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"+/-"} colorText={"#ffffff"} onPress={() => addNumber("C")} />
                    <Button width={width / 4.5} height={height / 11} color={colorNumber} text={"0"} colorText={"#ffffff"} onPress={() => addNumber("0")} />
                    <Button width={width / 4.5} height={height / 11} color={colorIcon} text={"."} colorText={"#ffffff"} onPress={() => addNumber(".")} />
                    <Button width={width / 4.5} height={height / 11} color={colorEqual} text={"="} colorText={"#ffffff"} onPress={() => handleOperation("=")} />
                </View>
            </View>

        </SafeAreaView>
    );
}

