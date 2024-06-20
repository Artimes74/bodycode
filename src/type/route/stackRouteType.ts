import {StackNavigationProp} from '@react-navigation/stack';
import {ImageSourcePropType} from 'react-native';
import {RouteProp} from '@react-navigation/native';

export type MAIN_ROUTE_TYPE = {
  home: undefined;
  categories: {
    name: string;
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[];
  };
  type: {
    name: string;
    colum?: number;
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[];
  };
  type2: {
    name: string;
    colum?: number;
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[];
  };
  type3: {
    name: string;
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[];
  };
  type4: {
    name: string;
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[];
  };
  type5: {
    name: string;
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[];
  };
  type6: {
    name: string;
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[];
  };
  type7: {
    name: string;
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[];
  };
  result: undefined;
};

export type MAIN_NAVIGATION_TYPE = StackNavigationProp<MAIN_ROUTE_TYPE>;

export type DETAILS_OF_SELECTED_CATEGORY_SCREEN = RouteProp<
  MAIN_ROUTE_TYPE,
  'categories'
>;
export type DETAILS_OF_TYPES_SCREEN = RouteProp<MAIN_ROUTE_TYPE, 'type'>;
