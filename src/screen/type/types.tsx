import React from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  DETAILS_OF_TYPES_SCREEN,
  MAIN_NAVIGATION_TYPE,
} from '../../type/route/stackRouteType.ts';
import Rows from './components/rows.tsx';

const SPACE = 10;

const Types = () => {
  const navigation = useNavigation<MAIN_NAVIGATION_TYPE>();
  const route = useRoute<DETAILS_OF_TYPES_SCREEN>();
  const {
    params: {name, data, colum},
  } = route;
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
      navigation.navigate('type2', {name: itemName, data: itemData});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer} />
      <ScrollView
        style={styles.rowsContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
        horizontal={false}>
        <View style={styles.rows}>
          <Rows
            data={data}
            leftOver={0}
            onPress={onPress}
            colum={colum !== undefined ? colum : 0}
          />
          <Rows
            data={data}
            leftOver={1}
            onPress={onPress}
            colum={colum !== undefined ? colum : 0}
          />
          {colum !== undefined ? (
            <Rows data={data} leftOver={2} onPress={onPress} colum={colum} />
          ) : null}
        </View>
      </ScrollView>
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
    marginTop: SPACE,
  },
  rows: {
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
});
export default Types;
