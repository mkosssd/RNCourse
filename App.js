import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalOutput from './components/GoalOutput'
import { StatusBar } from 'expo-status-bar'

export default function App () {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'ep2', text: 'Learn React Native!' },
    { id: 'ep1', text: 'Create Native Android & iOS Apps!' },
  ])
  const [modalIsVisible, setModalIsVisible] = useState(false)
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
  const openModal = () => {
    setModalIsVisible(true)
  }
  const closeModal = () => {
    setModalIsVisible(false)
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Pressable android_ripple={{ color: '#6c00fe' }} style={styles.modalButton} onPress={openModal}>
          <Text style={styles.ButtonText}> Add New Goal</Text>
        </Pressable>
        {modalIsVisible && (
          <GoalInput onAddGoal={addGoalHandler} modalHandler={closeModal} visible={modalIsVisible} />
        )}
        {courseGoals.length > 0 && (
          <View style={styles.goalsContainer}>
            <Text style={styles.GoalHeading}>Goals</Text>
            <FlatList data={courseGoals} 
				renderItem={itemData => {
					return (
					<GoalOutput
						itemData={itemData}
						DeleteHandler={DeleteHandler}
					/>
					)}}
				keyExtractor={(item, index) => {
					return item.id
				}}
            />
          </View>
        )}
      </View>
		<Text style={styles.note}>*Click on a goal to delete it.</Text>
    </>
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
    marginTop: 15,
    borderTopColor: '#ccc',
    borderTopWidth: 2,
    paddingVertical: 10
  },
  modalButton: {
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#6c00fe',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 2,
    padding: 10
  },
  ButtonText: {
    fontWeight: '900',
    color: 'white',
    padding: 10
  },
  GoalHeading: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
    color: 'white'
  },
  note: {
	marginHorizontal: 15,
	fontWeight: '600',
	color: 'white',
	marginVertical: 5,
	fontSize: 12
  }
})
