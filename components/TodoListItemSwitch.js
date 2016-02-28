'use strict';
var React = require('react-native');
const styles = require('../styles/style.js')
const {View, Switch} = React;

class TodoListItemSwitch extends React.Component
{

	constructor(props)
	{
		super(props);

		this.state = {
			switchOn: this.props.status
		}
	}

	render() {
	    return (
	      <View>
	        <Switch
	          style={{marginBottom: 10}}
	          value={this.props.status} 
	          onValueChange={this.props.statusChange}
	          />

	      </View>
	    );
	 }


}

module.exports = TodoListItemSwitch