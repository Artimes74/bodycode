import angal from '../../../assets/img/types/pato/ang/ang.jpg';
import bak from '../../../assets/img/types/pato/bak/bak.jpg';
import pato from '../../../assets/img/types/pato/pato/pato.jpg';
import qarch from '../../../assets/img/types/pato/qarch/qarch.jpg';
import kap from '../../../assets/img/types/pato/kap/kap.jpg';
import vir from '../../../assets/img/types/pato/vir/vir.jpg';
import {ImageSourcePropType} from 'react-native';
import {
  angData,
  bakData,
  kapData,
  patoData,
  qarchData,
  virData,
} from './bakData.tsx';

export const PatojenData: {
  name: string;
  img: ImageSourcePropType | undefined;
  data: any[];
  lastPageData: ImageSourcePropType | undefined;
}[] = [
  {
    name: 'انگل',
    img: angal,
    data: angData,
    lastPageData: undefined,
  },
  {
    name: 'باکتری',
    img: bak,
    data: bakData,
    lastPageData: undefined,
  },
  {
    name: 'پاتوژن ماورایی',
    img: pato,
    data: patoData,
    lastPageData: undefined,
  },
  {
    name: 'قارچ',
    img: qarch,
    data: qarchData,
    lastPageData: undefined,
  },
  {
    name: 'کپک',
    img: kap,
    data: kapData,
    lastPageData: undefined,
  },
  {
    name: 'ویروس',
    img: vir,
    data: virData,
    lastPageData: undefined,
  },
];
