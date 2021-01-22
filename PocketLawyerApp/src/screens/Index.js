import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './search/SearchList';
import ForumScreen from './forum/ForumList';
import JobScreen from './job/JobList';
import RequestScreen from './request/RequestList';
import UserScreen from './system/UserScreen';

const Tab = createMaterialBottomTabNavigator();
const IndexScreen = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Văn bản',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="reader" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Request"
                component={RequestScreen}
                options={{
                    tabBarLabel: 'Tư vấn',
                    tabBarColor: '#1f65ff',
                    tabBarIcon: ({ color }) => (
                        <Icon name="help-circle" color={color} size={26} />
                    )
                }}
            />
            <Tab.Screen
                name="Job"
                component={JobScreen}
                options={{
                    tabBarLabel: 'Tìm việc',
                    tabBarColor: '#694fad',
                    tabBarIcon: ({ color }) => (
                        <Icon name="briefcase" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Forum"
                component={ForumScreen}
                options={{
                    tabBarLabel: 'Forum',
                    tabBarColor: '#d02860',
                    tabBarIcon: ({ color }) => (
                        <Icon name="chatbubble-ellipses" color={color} size={26} />
                    ),
                }}
            />
                   <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    tabBarLabel: 'Người dùng',
                    tabBarColor: '#d02860',
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default IndexScreen;