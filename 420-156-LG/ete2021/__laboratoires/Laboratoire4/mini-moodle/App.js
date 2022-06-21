import React from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from 'react-native';
import Enseignant from './Enseignant';
import Etudiant from './Etudiant';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentStatus: false,
      teacherStatus: true,
    };
  }

  updateStudentStatus = () => {
    const currentStatus = this.state.studentStatus;
    this.setState({ studentStatus: !currentStatus });
  };

  updateTeacherStatus = () => {
    const currentStatus = this.state.teacherStatus;
    this.setState({ teacherStatus: !currentStatus });
  };

  render() {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.headerText}>MINI-MOODLE</Text>
        </View>
        <View style={styles.moodleImageContainer}>
          <Image
            style={styles.moodleImage}
            source={require('./assets/moodle.jpeg')}
          />
        </View>
        <View style={styles.userStatusContainer}>
          <View>
            <Text>Je suis etudiant</Text>
            <Switch
              value={this.state.studentStatus}
              onValueChange={this.updateStudentStatus}
            />
          </View>
          <View>
            <Text>Je suis un enseignant</Text>
            <Switch
              value={this.state.teacherStatus}
              onValueChange={this.updateTeacherStatus}
            />
          </View>
        </View>
        <View style={styles.userDataContainer}>
          {this.state.studentStatus && <Etudiant />}
          {this.state.teacherStatus && <Enseignant />}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    backgroundColor: '#FF851B',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },

  moodleImageContainer: {
    alignItems: 'center',
  },
  moodleImage: {
    height: 150,
    width: '100%',
  },

  userStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  userDataContainer: {
    margin: 16,
  }
});

export default App;
