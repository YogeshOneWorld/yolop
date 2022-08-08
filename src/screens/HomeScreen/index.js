import {Text, View, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import Bottomsheet from '@components/BottomSheet';

const HomeScreen = () => {
  const bottomSheetRef = useRef(null);
  const [snapPoints, setSnapPoints] = useState(['50%']);
  const [indexVal, setIndexVal] = useState(-1);

  const onExpand = () => {
    bottomSheetRef.current?.expand();
  };

  const onClose = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text onPress={onExpand} style={{color: '#000'}}>
        bjfusdfsdnbfsdfbh
      </Text>
      <Bottomsheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}>
        <Text style={{color: '#000'}} onPress={onClose}>
          HomeScreen
        </Text>
      </Bottomsheet>
    </SafeAreaView>
  );
};
export default HomeScreen;
