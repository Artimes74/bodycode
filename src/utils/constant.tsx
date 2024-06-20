import energy from '../assets/img/home/energy.jpg';
import patozon from '../assets/img/home/patozon.jpg';
import madar from '../assets/img/home/madar.jpg';
import jabejai from '../assets/img/home/jabejai.jpg';
import somom from '../assets/img/home/somom.jpg';
import ghaza from '../assets/img/home/ghaza.jpg';

import {ImageSourcePropType} from 'react-native';
import {energyData} from './constants/energy/energy.tsx';
import {PatojenData} from './constants/patojen/patojen.tsx';
import {systemData} from './constants/system/system.tsx';

// @ts-ignore
export const HOME_PAGE_DATA: {
  name: string;
  img: ImageSourcePropType | undefined;
  data: {
    name: string;
    image: ImageSourcePropType | undefined;
    data: [];
  }[];
}[] = [
  //@ts-ignore
  {name: 'انرژی', img: energy, data: energyData},
  {name: 'پاتوژن‌ها', img: patozon, data: PatojenData},
  {name: 'مدار‌ها و سیستم‌ها', img: madar, data: systemData},
  {name: 'جابه‌جایی', img: jabejai, data: []},
  {name: 'سموم', img: somom, data: []},
  {name: 'تغذیه و سبک زندگی', img: ghaza, data: []},
];
