

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  AlertIOS,
  View
} from 'react-native';


var Firebase = require('firebase');
const FirebaseUrl = 'https://luminous-torch-7893.firebaseio.com/Tal';

const TitleBar = require('./components/TitleBar');
const AddButton = require('./components/AddNewButton');
const TodoListItem = require('./components/TodoListItem');

class Tal extends Component {
 
  constructor(props){
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
    this.todoItemsRef = new Firebase(FirebaseUrl);
  }


  componentDidMount(){
    this.listenForDataChange(this.todoItemsRef);
  }

  listenForDataChange(todoItemsRef){
    todoItemsRef.on('value', (dataSnap) => {

      var items = []

      dataSnap.forEach((child) => {
        items.push({
          name: child.val().name,
          _key: child.key(),
          date_posted: child.val().date_posted,
          status: child.val().status
        });
      })

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  _renderTodoItem(item){

    const onPress = () => {
      AlertIOS.prompt(
        'Todo item options',
        null,
        [
          {text: 'Delete item', onPress: (text) => this.todoItemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log("cancelled")}
        ],
        'default'
      );
    };

    const statusChange = () => {
      var upd = this.todoItemsRef.child(item._key);
      
      upd.update({
        "status": !item.status
      });

      console.log("update plasce");

    };

    return(

      <TodoListItem item={item} onPress={onPress} statusChange={statusChange}/>
    );
  }


  _addNewTodoItem(){


    AlertIOS.prompt(
      'Add new todo item',
      null,
      [
        {
          text: 'Add',
          onPress:(text) =>{
            this.todoItemsRef.push({name: text, date_posted: this._getDateAndTime(), status: false})
          },
        },       
        {text:'Cancel', onPress:(text) => console.log("cancelled")},
      ],
      'plain-text'
    );
  }


  _getDateAndTime(){

    var time = new Date().getTime();
    var date = new Date(time);
    return (date.toString());
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleBar title="All Todo's"/>

        <ListView
          dataSource = {this.state.dataSource}
          renderRow={this._renderTodoItem.bind(this)}
          style={styles.listview}
        />

        <AddButton title="Add todo" onPress={this._addNewTodoItem.bind(this)}/>
      </View>
    );
  }
}




const styles = require('./styles/style.js');

AppRegistry.registerComponent('Tal', () => Tal);
