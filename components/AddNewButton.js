'use strict';
const React = require('react-native');
const styles = require('../styles/style.js')
const constants = styles.constants;
const { StyleSheet, Text, View, TouchableHighlight } = React;

class AddNewTodo extends React.Component{
	render(){
		return(
			<View style = {styles.addNewTodoView}>
				<TouchableHighlight
					underlayColor={constants.actionColor}
					onPress={this.props.onPress}
				>
					<Text style={styles.addNewTodoText}>
						{this.props.title}
					</Text>
				</TouchableHighlight>

			</View>

		);
	}
}

module.exports = AddNewTodo