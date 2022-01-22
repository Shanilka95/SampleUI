import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import ComponentStyles from '../common/Component.styles';

const Sample = () => {
  const [description, setDescription] = React.useState('');

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Product Type</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Description"
              placeholderTextColor={ComponentStyles.COLORS.BLACK}
              onChangeText={text => setDescription(text)}
              defaultValue={description}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: ComponentStyles.COLORS.BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    margin: 20,
  },
  text: {
    color: 'black',
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
  },
  inputText: {
    height: 50,
    width: '90%',
    color: ComponentStyles.COLORS.BLACK,
    marginLeft: 10,
  },
  inputView: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: ComponentStyles.COLORS.BORDER_COLOR,
    backgroundColor: ComponentStyles.COLORS.WHITE,
    height: 50,
    paddingHorizontal: 5,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Sample;
