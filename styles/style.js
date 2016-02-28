const React = require('react-native')

const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  titleBar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  titleBarText: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusBar: {
    backgroundColor: '#fff',
    height: 22,
  },

  addNewTodoText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  addNewTodoView: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },

  listview: {
    flex: 1,
  },
  todoListItemView: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
    flex: 2,
  },
  liContainer: {
    flex: 2,
  },
  todoListItemText: {
    color: '#333',
    fontSize: 16,
  },  

})



module.exports = styles;
module.exports.constants = constants;