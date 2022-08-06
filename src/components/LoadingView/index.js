import React, {forwardRef} from 'react';
import Modal from 'react-native-modalbox';
import {DotIndicator} from 'react-native-indicators';
import {styles} from './styles';
import {COLORS} from '@utils/colors';
import {SPACING} from '@utils/constant';

const LoadingView = forwardRef((props, ref) => (
  <Modal
    style={styles.loadingModal}
    position={'center'}
    entry="bottom"
    swipeToClose={false}
    backButtonClose={false}
    backdropPressToClose={false}
    animationDuration={200}
    ref={ref}>
    <>
      <DotIndicator color={COLORS.yellow} size={SPACING.sw10} />
    </>
  </Modal>
));

export default LoadingView;
