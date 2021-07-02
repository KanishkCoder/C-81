import React from "react";
import { createDrawerNavigator } from '@react-native/drawer'
import TabNavigator from "./TabNavigator";
import Profile from "../screens/profile";

const Drawer = createDrawerNavigator()
createDrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={TabNavigator} />
            <Drawer.Screen name='Profile' component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator ;