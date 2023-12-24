import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [goalText, setGoalText] = useState('');

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    props.onAddGoal(goalText);
    props.onClose();
  }
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('./assets/images/logo.png')} />
        <TextInput
          style={styles.textInput}
          placeholder='Type your goal'
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onClose} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' color='#5e0acc' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 24,
    flex: 1,
    padding: 16,
    backgroundColor: '#1A0037',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    marginRight: 8,
    padding: 8,
    // color:'white',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

module.exports = GoalInput;
