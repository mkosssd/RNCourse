import { useState } from 'react'
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import GoalOutput from './components/GoalOutput'
import GoalInput from './components/GoalInput'

export default function App () {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'ep2', text: 'Learn React Native!' }
  ])

  const addGoalHandler = enteredText => {
    setCourseGoals(currentCourseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), text: enteredText }
    ])
  }
  const DeleteHandler = id => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter(e => e.id !== id)
    })
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalOutput itemData={itemData} DeleteHandler={DeleteHandler} />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
    height: '100%'
  },

  goalsContainer: {
    marginTop: 15
  }
})
