import { useState } from "react"
import { StyleSheet, TextInput, View, Button } from "react-native"

const GoalInput = (props) => {
    const [enteredText, setEnteredText] = useState('')
    const goalInputHandler = text => {
      setEnteredText(text)
    }
    const addGoalHandler = () =>{
        if(enteredText.trim()==''){
            return 
        }else{
            props.onAddGoal(enteredText)
            setEnteredText('')
        }
    }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={enteredText}
        onChangeText={goalInputHandler}
        placeholder='Your course goal'
      ></TextInput>
      <Button color={'blue'} onPress={addGoalHandler} title='Add Goal' />
    </View>
  )
}
export default GoalInput

const styles = StyleSheet.create({
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
})
