import React from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  DETAILS_OF_SELECTED_CATEGORY_SCREEN,
  MAIN_NAVIGATION_TYPE,
} from '../../type/route/stackRouteType.ts';
import Rows from '../home/components/rows.tsx';
import {HOME_PAGE_DATA} from '../../utils/constant.tsx';

const SPACE = 10;

const SelectedCategory = () => {
  const navigation = useNavigation<MAIN_NAVIGATION_TYPE>();
  const route = useRoute<DETAILS_OF_SELECTED_CATEGORY_SCREEN>();
  const {
    params: {name, data},
  } = route;

  const checker = (itemName: string) => {
    switch (itemName) {
      case 'اندام‌ها':
        return 3;
      case 'سیستم‌ها':
        return 3;
      default:
        return 0;
    }
  };

  const onPress = (
    itemName: string,
    itemData: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[],
    lastPageData: ImageSourcePropType | undefined,
  ) => {
    if (lastPageData !== undefined) {
      navigation.navigate('result');
    } else {
      navigation.navigate('type', {
        name: itemName,
        data: itemData,
        colum: checker(itemName),
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer} />
      <View style={styles.rowsContainer}>
        <Rows data={data} leftOver={1} onPress={onPress} />
        <Rows data={data} leftOver={0} onPress={onPress} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: SPACE * 2,
    paddingHorizontal: SPACE - 2,
  },
  TitleContainer: {
    width: '55%',
    height: '10%',
    borderRadius: SPACE - 2,
  },
  rowsContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
    marginTop: SPACE * 2,
  },
});
export default SelectedCategory;
