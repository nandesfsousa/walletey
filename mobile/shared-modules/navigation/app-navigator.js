import { createBottomTabNavigator } from 'react-navigation-tabs';

import Profile from '../../products-modules/profile.js';
import Wallets from '../../products-modules/wallets.js';
import Help from '../../products-modules/help.js';

const TabNavigatorConfig = {
    initialRouteName: 'Profile',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Profile: {
        screen: Profile,
    },
    Wallets: {
        screen: Wallets,
    },
    Help: {
        screen: Help,
    },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;