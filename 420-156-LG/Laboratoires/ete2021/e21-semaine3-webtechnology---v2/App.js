/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx
 * Introduction à React et React native
 * Utilisation des images
 * Two-way data binding
 * Passage des paramètres avec Props
 * Ecouter les événements dans une zone de texte avec TextInput
 * utilisation de Scrollview
 * utilisation de la fonction map()
 */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const TECHNOLOGIES = [
  {
    name: 'React',
    stat: '65%',
  },
  {
    name: 'React Native',
    stat: '25%',
  },
  {
    name: 'Javascript',
    stat: '85%',
  },
  {
    name: 'HTML',
    stat: '95%',
  },
  {
    name: 'CSS',
    stat: '95%',
  },
];

class WebTechnology extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: 'Par defaut!',
    };
  }

  updateComment = (newComment) => {
    this.setState({ comment: newComment });
  };

  updateCommentClone(newComment) {
    this.setState({ comment: newComment });
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.name} - ({this.props.stat})
        </Text>
        <Text>Commentaire : {this.state.comment}</Text>
        <TextInput
          value={this.state.comment}
          style={styles.input}
          onChangeText={this.updateComment}
        />
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Web Technologies</Text>
        </View>
        <View style={styles.webTechnologyContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>

          <ScrollView style={styles.scrollContainer}>
            {TECHNOLOGIES.map(function (item) {
              return <WebTechnology name={item.name} stat={item.stat} />;
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'teal',
    paddingTop: 36,
    paddingBottom: 12,
    marginBottom: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  webTechnologyContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    borderWidth: 2,
    height: 50,
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  image: {
    height: 100,
    width: 100,
  },
  imageContainer: {
    alignItems: 'center',
  },
  scrollContainer: {
    margin: 8,
  },
});

export default App;
