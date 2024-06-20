import React from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import Rows from './components/rows.tsx';
import {HOME_PAGE_DATA} from '../../utils/constant.tsx';
import {useNavigation} from '@react-navigation/native';
import {MAIN_NAVIGATION_TYPE} from '../../type/route/stackRouteType.ts';

const SPACE = 10;

const Home = () => {
  const navigation = useNavigation<MAIN_NAVIGATION_TYPE>();
  const onPress = (
    name: string,
    data: {
      name: string;
      img: ImageSourcePropType | undefined;
      data: {name: string; image: ImageSourcePropType | undefined}[];
    }[],
  ) => {
    navigation.navigate('categories', {name: name, data: data});
  };

  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer} />
      <View style={styles.rowsContainer}>
        <Rows data={HOME_PAGE_DATA} leftOver={0} onPress={onPress} />
        <Rows data={HOME_PAGE_DATA} leftOver={1} onPress={onPress} />
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
export default Home;
