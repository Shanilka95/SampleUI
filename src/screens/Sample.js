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
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ComponentStyles from '../common/Component.styles';

const Sample = () => {
  const [description, setDescription] = React.useState('');
  const [driverNote, setDriverNote] = React.useState('');
  const onSubmitButtonClick = () => {};

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
          <Text style={styles.sponsorText}>
            Please explain the products you want to deliver. The driver will
            call you before the delivery to verify the details.
          </Text>
          <Text style={styles.noteText}>Product cost</Text>
          <Text style={styles.sponsorText}>
            Please add the cost of products
          </Text>
          <Text style={styles.noteText}>Insurance</Text>
          <Text style={styles.sponsorText}>
            Choose your insurance value in accordance with the value of your
            goods and needs.
          </Text>
          <Text style={styles.noteText}>Package size</Text>
          <Text style={styles.noteText}>Tip your driver</Text>
          <Text style={styles.sponsorText}>
            Support your driver and make their day! 100% of your tip will be
            transferred to them.
          </Text>
          <Text style={styles.noteText}>Support go green</Text>
          <Text style={styles.sponsorText}>
            We are sponsoring 15% of the total fare for carbon free environment.
            Support us to reduce carbon emission to save the earth!
          </Text>
          <Text style={styles.noteText}>Note for driver</Text>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              placeholder="Add your notes"
              placeholderTextColor="#8F9BB3"
              numberOfLines={5}
              multiline={true}
              defaultValue={driverNote}
              onChangeText={driverNoteText => setDriverNote(driverNoteText)}
            />
          </View>
          <TouchableOpacity
            style={styles.submitButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.onSubmitButtonClick}>
            <Text style={styles.buttonTextStyle}> ADD </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: ComponentStyles.COLORS.WHITE,
  },
  container: {
    flex: 1,
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
  submitButtonStyle: {
    height: 48,
    width: '100%',
    padding: 10,
    marginBottom: 34,
    marginTop: 28,
    backgroundColor: '#ED932B',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ED932B',
  },
  buttonTextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
  },
  textArea: {
    width: '100%',
    height: 86,
    padding: 15,
    fontSize: 15,
    color: ComponentStyles.COLORS.BLACK,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  textAreaContainer: {
    borderColor: '#8F9BB3',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  noteText: {
    color: 'black',
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
    marginBottom: 13,
  },
  sponsorText: {
    color: '#8F9BB3',
    fontSize: 12,
    fontFamily: ComponentStyles.FONT_FAMILY.BOLD,
    marginBottom: 21,
  },
});

export default Sample;
