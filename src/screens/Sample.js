import React, { useState } from 'react';
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
  Switch,
} from 'react-native';
import ComponentStyles from '../common/Component.styles';
import { RadioButton } from 'react-native-paper';

const Sample = () => {
  const [description, setDescription] = useState('');
  const [productCost, setProductCost] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [small, setSmall] = useState('small');
  const [medium, setMedium] = useState('medium');
  const [large, setLarge] = useState('large');

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={{ margin: 5 }}>
            <Text style={styles.titleText}>Product Type</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Description"
                placeholderTextColor={ComponentStyles.COLORS.BLACK}
                onChangeText={text => setDescription(text)}
                defaultValue={description}
              />
            </View>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={styles.titleText}>Product Cost</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Product Cost"
                placeholderTextColor={ComponentStyles.COLORS.BLACK}
                onChangeText={text => setProductCost(text)}
                defaultValue={productCost}
              />
            </View>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={styles.titleText}>Insurance</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 5,
                paddingVertical: 5,
              }}>
              <Text style={styles.subtitleText}>$ 0.0</Text>
              <Switch
                trackColor={{
                  false: '#767577',
                  true: ComponentStyles.COLORS.ORANGE,
                }}
                thumbColor={
                  isEnabled ? ComponentStyles.COLORS.ORANGE : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
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
    margin: 15,
  },
  titleText: {
    color: ComponentStyles.COLORS.BLACK,
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
    fontSize: 16,
    marginHorizontal: 5,
  },
  subtitleText: {
    color: ComponentStyles.COLORS.BLACK,
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
    fontSize: 14,
  },
  descriptionText: {
    textAlign: 'justify',
    marginVertical: 5,
    color: ComponentStyles.COLORS.GRAY,
    fontFamily: ComponentStyles.FONT_FAMILY.SEMI_BOLD,
    fontSize: 13,
  },
  inputText: {
    height: 50,
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
const desc =
  'Please expalain the products you want to deliver. The driver will call you before the delivery to verify the details.';
const desc1 = 'Please add the cost of the products';
const desc2 =
  'Choose your insurance value in accordance with the value of your goods and needs.';

export default Sample;
