/** 
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx 
 * 
 * Affichage conditionnel des éléments 
 * Utilisation d'un bouton toogle
 */
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

class Etudiant extends React.Component {
  render() {
    return (
      <View>
        <Text>Je suis un étudiant</Text>
      </View>
    );
  }
}

class Enseignant extends React.Component {
  render() {
    return (
      <View>
        <Text>Je suis un enseignant</Text>
      </View>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  toggleValue = () => {
    const currentValue = this.state.isEnabled;
    this.setState({ isEnabled: !currentValue });    
  };

  render() {
    //const content = this.state.isEnabled ? <Etudiant /> : <Enseignant />;
    return (
      <View style={styles.container}>
        <Text>ON: Etudiant</Text>
        <Text>OFF: Enseignant</Text>

        <View style={styles.body}>
          <Switch
            value={this.state.isEnabled}
            onValueChange={this.toggleValue}
          />
          { this.state.isEnabled && <Etudiant /> }
          { !this.state.isEnabled && <Enseignant /> }
          { /** content */ }
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default App;
