import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalOutput = props => {
	const onDeleteGoal = index => {
		props.DeleteHandler(index)
	}
	return (
		<View style={styles.goalsList}>
			<Pressable android_ripple={{ color: '#dddddd' }}
				 onPress={() => { 
					onDeleteGoal(props.itemData.item.id)
				}}
				style={({ pressed }) => {
					pressed && styles.pressedItem
				}}
			>
				<Text style={styles.listText}>{props.itemData.item.text}</Text>
			</Pressable>
		</View>
	)
}
export default GoalOutput

const styles = StyleSheet.create({
	goalsList: {
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 5,
		marginVertical: 5,
		backgroundColor: '#6c00fe',
		flex: 1
	},
	listText: {
		fontWeight: '900',
		color: '#eee',
		padding: 8
	},
	pressedItem: {
		backgroundColor: '#dddddd'
	}
})
