import React from 'react';
import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  DETAILS_OF_SELECTED_CATEGORY_SCREEN,
  MAIN_NAVIGATION_TYPE,
} from '../../type/route/stackRouteType.ts';
import ScrollRows from '../type2/components/scrollRows.tsx';

const SPACE = 10;
const Type5 = () => {
  const navigation = useNavigation<MAIN_NAVIGATION_TYPE>();
  const route = useRoute<DETAILS_OF_SELECTED_CATEGORY_SCREEN>();
  const {
    params: {name, data},
  } = route;
  console.log('data is :', data);
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
      navigation.navigate('type6', {name: itemName, data: itemData});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer} />
      <ScrollView
        scrollEnabled={true}
        style={{width: '100%'}}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.rowsContainer}>
          <ScrollRows data={data} leftOver={1} onPress={onPress} />
          <ScrollRows data={data} leftOver={0} onPress={onPress} />
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
    flexDirection: 'row-reverse',
    // marginTop: SPACE * 2,
  },
});
export default Type5;
