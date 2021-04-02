import React from 'react'
import { StyleSheet, Text, View , Modal, Image} from 'react-native'

const loadingModal = ({visible}) => {
    return (
        <Modal transparent visible = {visible} >
            <View style = {styles.container}>
                <Image source={require('../assets/gif/loading.gif')} resizeMode='contain' width={200} height={200}/>
            </View>
       </Modal>
    )
}

export default loadingModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems:'center'
    }
})
