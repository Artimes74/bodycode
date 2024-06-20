import {ImageSourcePropType} from 'react-native';
import etiad from '../../../assets/img/categories/energy/etiad.jpg';
import asib from '../../../assets/img/categories/energy/energyasibpazir.jpg';
import tahajomi from '../../../assets/img/categories/energy/tahajom.jpg';
import jesmani from '../../../assets/img/categories/energy/energyJesmi.jpg';
import zehni from '../../../assets/img/categories/energy/zehen.jpg';
import ehsasi from '../../../assets/img/categories/energy/ehsasi.jpg';
import eltehab from '../../../assets/img/types/energy/asib/التهاب.jpg';
import miazm from '../../../assets/img/types/energy/asib/میازم.jpg';
import khaterat from '../../../assets/img/types/energy/asib/خاطرات.jpg';
import teromayJensi from '../../../assets/img/types/energy/asib/termoa.jpg';
import etiadResult from '../../../assets/img/result/energy/etiad/etiad.jpg';
import tosieh from '../../../assets/img/types/energy/tahjom/tosieh.jpg';
import mojodat from '../../../assets/img/types/energy/tahjom/mojodat.jpg';
import mokhareb from '../../../assets/img/types/energy/tahjom/mokhareb.jpg';
import nefrin from '../../../assets/img/types/energy/tahjom/nefrin.jpg';
import tanab from '../../../assets/img/types/energy/tahjom/tanab.jpg';
import telesm from '../../../assets/img/types/energy/tahjom/telsm.jpg';
import jesmi from '../../../assets/img/types/energy/alerji/jesmi/photo_2024-05-09_23-18-09.jpg';
import tahmol from '../../../assets/img/types/energy/alerji/tahmol/photo_2024-05-09_23-18-16.jpg';
import fekri from '../../../assets/img/types/energy/alerji/fekri/photo_2024-05-09_23-18-24.jpg';
import ersal from '../../../assets/img/types/energy/zehen/esral/ersal.jpg';
import bavar from '../../../assets/img/types/energy/zehen/bavar/bavar.jpg';
import tasavir from '../../../assets/img/types/energy/zehen/tasavir/tasavir.jpg';
import zendgi from '../../../assets/img/types/energy/zehen/zendgi/zendgi.jpg';
import langar from '../../../assets/img/types/energy/zehen/lang/langar.jpg';
import meydon from '../../../assets/img/types/energy/zehen/meydan/meydon.jpg';
import mordan from '../../../assets/img/types/energy/zehen/mordan/moradan.jpg';
import divarZehni from '../../../assets/img/types/energy/ehsasi/divarZehni/zehni.jpg';
import giroftadan from '../../../assets/img/types/energy/ehsasi/gir/gir.jpg';
import tashdid from '../../../assets/img/types/energy/ehsasi/tashdid/tashdid.jpg';
import divarGhalbi from '../../../assets/img/types/energy/ehsasi/ghalb/ghalb.jpg';
import divarMotefareghe from '../../../assets/img/types/energy/ehsasi/mot/mot.jpg';

import {
  mojodatResultData,
  mokharebResultData,
  nefrinResultData,
  tanabResultData,
  telsmResultData,
  tosiehResultData,
} from './tahjomResultData.tsx';
import {
  al_fekriData,
  al_jesmiData,
  al_tahmolData,
} from './alerjiResultData.tsx';
import {
  zh_bavarData,
  zh_ersalData,
  zh_langarData,
  zh_meydanData,
  zh_mordanData,
  zh_tasavirData,
  zh_zendgiData,
} from './zehniResultData.tsx';
import {
  eh_ghalbi,
  eh_giroftadan,
  eh_motefareghe,
  eh_tashdid,
  eh_zehni,
} from './ehsasi.tsx';

const etiadData: any = etiadResult;

const asibData = [
  {name: 'التهاب', img: eltehab, data: [], lastPageData: asib},
  {name: 'میازم', img: miazm, data: [], lastPageData: asib},
  {name: 'آسیب جسمی (ترومای جسمی)', img: asib, data: [], lastPageData: asib},
  {
    name: 'خاطرات ناگوتر روانی(ترومای روانی)',
    img: khaterat,
    data: [],
    lastPageData: asib,
  },
  {name: 'ترومای جنسی', img: teromayJensi, data: [], lastPageData: asib},
];

const tahjomData = [
  {
    name: 'توصیه های بعداز هیپنوتیز',
    img: tosieh,
    data: [],
    lastPageData: tosiehResultData,
  },
  {name: 'طلسم', img: telesm, data: [], lastPageData: telsmResultData},
  {name: 'طناب انرزی', img: tanab, data: [], lastPageData: tanabResultData},
  {name: 'مخرب', img: mokhareb, data: [], lastPageData: mokharebResultData},
  {name: 'موجودات', img: mojodat, data: [], lastPageData: mojodatResultData},
  {name: 'نفرین', img: nefrin, data: [], lastPageData: nefrinResultData},
];

const alerjiData = [
  {name: 'آلرژی جسمی', img: jesmi, data: [], lastPageData: al_jesmiData},
  {
    name: 'عدم تحمل غذایی',
    img: tahmol,
    data: [],
    lastPageData: al_tahmolData,
  },
  {name: 'آلرزی فکری', img: fekri, data: [], lastPageData: al_fekriData},
];

const zehniData = [
  {name: 'ارسال پیام', img: ersal, data: [], lastPageData: zh_ersalData},
  {
    name: 'باور',
    img: bavar,
    data: [],
    lastPageData: zh_bavarData,
  },
  {name: 'تصاویر', img: tasavir, data: [], lastPageData: zh_tasavirData},
  {
    name: 'عدم میل به زندگی',
    img: zendgi,
    data: [],
    lastPageData: zh_zendgiData,
  },
  {name: 'لنگر ناامیدی', img: langar, data: [], lastPageData: zh_langarData},
  {name: 'میدان خاطره', img: meydon, data: [], lastPageData: zh_meydanData},
  {name: 'میل به مردن', img: mordan, data: [], lastPageData: zh_mordanData},
];

const ehsasiData = [
  {name: 'دیواره ذهنی', img: divarZehni, data: [], lastPageData: eh_zehni},
  {
    name: 'احساسات گیرافتاذه',
    img: giroftadan,
    data: [],
    lastPageData: eh_giroftadan,
  },
  {name: 'تشدید احساسی', img: tashdid, data: [], lastPageData: eh_tashdid},
  {name: 'دیواره قلبی', img: divarGhalbi, data: [], lastPageData: eh_ghalbi},
  {
    name: 'دیواره های متفرقه',
    img: divarMotefareghe,
    data: [],
    lastPageData: eh_motefareghe,
  },
];

export const energyData: {
  name: string;
  img: ImageSourcePropType | undefined;
  data: any[];
  lastPageData: ImageSourcePropType | undefined;
}[] = [
  {
    name: 'انرژی‌های پس از آسیب',
    img: asib,
    data: asibData,
    lastPageData: undefined,
  },
  {
    name: 'انرژی اعتیاد آور قلبی',
    img: etiad,
    data: [],
    lastPageData: etiadData,
  },

  {
    name: 'آلرژی‌ها و عدم تحمل‌ها',
    img: jesmani,
    data: alerjiData,
    lastPageData: undefined,
  },
  {name: 'تهاجمی', img: tahajomi, data: tahjomData, lastPageData: undefined},

  {name: 'احساسی', img: ehsasi, data: ehsasiData, lastPageData: undefined},
  {name: 'ذهنی', img: zehni, data: zehniData, lastPageData: undefined},
];
