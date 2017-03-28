
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { MainModule } from './containers/main.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(MainModule);