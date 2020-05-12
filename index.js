/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListItem from './screens/list_item';
import List from './screens/list';
import Reading from './reading_js/reading';
import Reading1 from './reading_js/reading1';
import App1 from './App1';
import Conversation from './conversation/conversation';
import Phone from './screens/Phone';
import Splash from './screens/Splash';

AppRegistry.registerComponent(appName, () => Splash);
