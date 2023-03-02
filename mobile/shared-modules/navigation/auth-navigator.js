import { createStackNavigator } from 'react-navigation-stack';

import Account from '../../products-modules/account.js';

const AuthNavigatorConfig = {
    initialRouteName: 'Account',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Account: Account
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;