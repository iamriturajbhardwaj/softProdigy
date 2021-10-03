import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export const drawerStyle = StyleSheet.create({
    drawerHeaderContainer:{
        backgroundColor:"#cecece",
        height:150,
        marginBottom:10,
        flexDirection:"row",
        paddingHorizontal: "2%",
        // justifyContent:"center",
        alignItems:"center"
    },
    drawerHeaderImgContainer:{
        backgroundColor:"pink",
        height:75,
        width:75,
        borderRadius: 50,
        borderWidth:.7,
        borderColor:"orange",
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center"

    },
    drawerHeaderImg:{
        height:70,
        height:70,
    },
    drawerHeaderTextContainer:{
        flexDirection:"column",
        marginLeft:"7.5%",
        marginTop:"-7%"
        
    },
    drawerHeaderText1:{
        fontSize:16,
        fontWeight:"bold",
        textTransform:"capitalize",
        color:"brown"
    },
    drawerHeaderText2:{
        fontSize:14,
        fontWeight:"normal",
        color:"black",
        marginLeft:"5%"
    },
    
})
