import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalOutput = props => {
 const onDeleteGoal = (index) => {
    props.DeleteHandler(index)
 }
  return (
    <Pressable onPress={()=>{onDeleteGoal(props.itemData.item.id)}}>
      <View style={styles.goalsList}>
        <Text style={styles.listText}>{props.itemData.item.text}</Text>
      </View>
    </Pressable>
  )
}
export default GoalOutput

const styles = StyleSheet.create({
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
