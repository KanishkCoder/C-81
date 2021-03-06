import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons'
import Feed from '../screens/feed'
import CreateStory from '../screens/createStory'

const Tab = createBottomTabNavigator()
const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator 
        screenOptions={({route})=>({
            TabBarIcon:({focused,color,size})=>{
                let iconName;
                if(route.name==='Feed'){
                    iconName=focused ? "book":"book-outline"
                }
                else if(route.name==='CreateStory'){
                    iconName=focused ? "create":"create-outline"
                }
                return(
                    <Ionicons name={iconName} size={size} color={color} />
                )
            }
        })}
        tabBarOptions={{
            activeTintColor:"tomato",
            inActiveTintColor:'grey'
        }}
        >
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='CreateStory' component={CreateStory} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator ;