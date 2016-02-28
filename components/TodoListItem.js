'use strict';
var React = require('react-native');
const styles = require('../styles/style.js')
const { View, TouchableHighlight, Text, Switch } = React;
const TodoItemSwitch = require('./TodoListItemSwitch');

class TodoListItem extends React.Component{


	render(){

		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<View style={styles.todoListItemView}>
					<Text style={styles.todoListItemText}> 
						{this.props.item.name} 
					</Text>
					
					<TodoItemSwitch status={this.props.item.status} statusChange={this.props.statusChange}/>
				</View>
			</TouchableHighlight>
		);
	}
}

module.exports = TodoListItem