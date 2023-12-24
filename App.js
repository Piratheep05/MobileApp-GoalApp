import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoalHandler(goalText) {
    setGoals((currentGoals) => [...currentGoals, goalText]);
  }
  function deleteItem(index) {
    console.log('delete Item' + index);
    const newGoals = goals.filter((el, i) => i != index);
    setGoals(newGoals);
  }

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }
  function closeAddGoalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#A070D6'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={isModalVisible}
          onAddGoal={addGoalHandler}
          onClose={closeAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item}
                  onDelete={() => deleteItem(itemData.index)}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1A0037',
  },

  goalsContainer: {
    flex: 4,
  },
});
