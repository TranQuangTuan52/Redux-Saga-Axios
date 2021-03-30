import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    textInput: {
        width: 300,        
        height: 50,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.8,
        marginVertical: 4,        
    },
    buttonLogin: {
        width: 150,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#1976d2',
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8
    },
    textButton: {
        fontSize: 18,
        color:'#fff'
    },
    containerButtons: {
        position: 'absolute',
        alignItems:'center',
        bottom: 40,        
    },
    textSignup: {
        fontSize: 18,
        color: 'black'
    }
})

export default styles