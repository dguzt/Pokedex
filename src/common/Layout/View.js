import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View as ReactNativeView } from 'react-native';

function View({ style = {}, children, ...rest }) {
  const insets = useSafeAreaInsets();

  return (
    <ReactNativeView
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        ...style,
      }}
      {...rest}
    >
      {children}
    </ReactNativeView>
  );
}

export default View;
