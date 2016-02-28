'use strict';
const React = require('react-native');
const styles = require('../styles/style.js')
const { StyleSheet, Text, View } = React;

class TitleBar extends React.Component{
	render(){
		return(
			<View>
				<View style={styles.statusBar}/>

				<View style={styles.titleBar}>
					<Text style={styles.titleBarText}> 
						{this.props.title}
					</Text>
				</View>
			</View>
		);
	}
}

module.exports = TitleBar