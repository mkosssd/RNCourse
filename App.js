import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App () {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'ep2', text: 'Learn React Native!' }
  ])
  const [enteredText, setEnteredText] = useState('')
  const goalInputHandler = text => {
    setEnteredText(text)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), text: enteredText }
    ])
    setEnteredText('')
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={enteredText}
          onChangeText={goalInputHandler}
          placeholder='Your course goal'
        ></TextInput>
        <Button
          onPress={addGoalHandler}
          title='Add Goal'
        />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map(goal => (
			<View key={goal.id} style={styles.goalsList}>  
				<Text style={styles.listText}>{goal.text}</Text>
			</View>			
        ))}
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc'
  },
  textInput: {
    width: '70%',
    borderColor: '#cccccc',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  goalsContainer: {
    marginTop: 15
  },
  goalsList: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
	backgroundColor: 'blue'
  },
  listText: {
	fontWeight: '900',
	color: '#eee'
  }
})
