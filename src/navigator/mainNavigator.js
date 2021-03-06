import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49207282Navigator from '../features/BlankScreen49207282/navigator';
import Maps207264Navigator from '../features/Maps207264/navigator';
import Additem207263Navigator from '../features/Additem207263/navigator';
import Maps207259Navigator from '../features/Maps207259/navigator';
import UserProfile207255Navigator from '../features/UserProfile207255/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49207282: { screen: BlankScreen49207282Navigator },
Maps207264: { screen: Maps207264Navigator },
Additem207263: { screen: Additem207263Navigator },
Maps207259: { screen: Maps207259Navigator },
UserProfile207255: { screen: UserProfile207255Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
