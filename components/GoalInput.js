import { useState } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
  Text
} from 'react-native'

const GoalInput = props => {
  const [enteredText, setEnteredText] = useState('')

  const goalInputHandler = text => {
	setEnteredText(text)
  }

  const [goalAdded, setGoalAdded] = useState('')

  let timerId;

  const addGoalHandler = () => {
	clearTimeout(timerId)
	setGoalAdded(null)
	if (enteredText.trim() == '') {
	  setGoalAdded('Enter a Goal First!')
	  return
	} else {
	  props.onAddGoal(enteredText)
	  setEnteredText('')
	  setGoalAdded('Goal Added Successfully!')
	}

	timerId = setTimeout(() => {
	  setGoalAdded(null)
	}, 3000)
  }

  return (
	<Modal visible={props.visible} animationType={'slide'}>
	  {/* <Button title='Close Modal' onPress={props.modalHandler} color='blue'></Button> */}
	  <View style={styles.inputContainer}>
		<View style={styles.imageContainer}>
		  <Image
			style={styles.image}
			source={require('../assets/images/goal.png')}
		  ></Image>
		</View>
		<View style={{ height: 20 }}>
		  {goalAdded && <Text style={styles.goalStatus}>{goalAdded}</Text>}
		</View>
		<TextInput
		  style={styles.textInput}
		  value={enteredText}
		  onChangeText={goalInputHandler}
		  placeholder='Your course goal'
		></TextInput>
		<View style={styles.Buttons}>
		  <Button color={'#6f0fff'} onPress={props.modalHandler} title='Go Back' />
		  <Button color={'#6f0fff'} onPress={addGoalHandler} title='Add Goal' />
		</View>
	  </View>
	</Modal>
  )
}
export default GoalInput

const styles = StyleSheet.create({
  Buttons: {
	flexDirection: 'row',
	justifyContent: 'space-around',
	margin: 10
  },
  textInput: {
	borderColor: '#cccccc',
	borderWidth: 1,
	paddingVertical: 5,
	paddingHorizontal: 10,
	marginHorizontal: 10,
	borderRadius: 5,
	marginBottom: 10,
	backgroundColor: 'white'
  },
  inputContainer: {
	flex: 1,
	justifyContent: 'center',
	alignContent: 'center',
	backgroundColor: '#311b6b'
  },
  image: {
	width: 100,
	height: 100
  },
  imageContainer: {
	alignItems: 'center',
	marginBottom: 15
  },
  goalStatus: {
	color: 'white',
	fontWeight: '900',
	marginHorizontal: 10
  }
})
