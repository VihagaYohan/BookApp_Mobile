import Toast from 'react-native-toast-message';

// print console logs
export const printLog = (data:{}|string)=>{
    console.log(data)
}

// toast message
export const showMessage =({type,title='',message})=>{
    Toast.show({
        type:type,
        text1:title,
        text2:message
    })
}


export default {
    printLog,
    showMessage
}