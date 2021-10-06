/**
 * Programmation d'applications mobiles 1 - Collège Lionel-Groulx
 * Afficher un modal
 * Ajouter et supprimer des produits dans une liste
 */
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import Constants from "expo-constants";

class ItemView extends React.Component {
  deleteItem = () => {
    const id = this.props.item.id;
    this.props.deleteItem(id);
  };

  render() {
    const { url, name, price } = this.props.item;
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: url }} style={{ width: "100%", height: 200 }} />
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
        <Button title="Delete" onPress={this.deleteItem} />
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      itemPrice: "0",
      itemUrl: "",
      items: [],
      showAddModal: false,
    };
  }

  addItem = () => {
    const { itemName, itemPrice, itemUrl } = this.state;
    const id = new Date().getUTCMilliseconds();

    const newItem = {
      id: id,
      name: itemName,
      price: itemPrice,
      url: itemUrl,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    this.closeModal();
  };

  deleteItem = (idToDelete) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== idToDelete),
    }));
  };

  renderItemForm = () => {
    return (
      <View style={styles.itemForm}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={this.state.itemName}
          onChangeText={(text) => {
            this.setState({ itemName: text });
          }}
        />
        <TextInput
          placeholder="Price"
          style={styles.input}
          value={this.state.itemPrice}
          onChangeText={(text) => {
            this.setState({ itemPrice: text });
          }}
        />
        <TextInput
          placeholder="Url"
          style={styles.input}
          value={this.state.itemUrl}
          onChangeText={(text) => {
            this.setState({ itemUrl: text });
          }}
        />
        <Button title="Add item" onPress={this.addItem} />
      </View>
    );
  };

  showModal = () => {
    this.setState({ showAddModal: true });
  };

  closeModal = () => {
    this.setState({ showAddModal: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Add item" onPress={this.showModal} />
        <Modal
          visible={this.state.showAddModal}
          animationType="slide"
          transparent={false}
        >
          <View style={styles.modalContainer}>{this.renderItemForm()}</View>
        </Modal>
        <ScrollView>
          {this.state.items.map((item) => (
            <ItemView key={item.id} item={item} deleteItem={this.deleteItem} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  itemForm: {
    margin: 16,
  },
  itemContainer: {
    marginVertical: 16,
  },
  itemName: {
    fontSize: 20,
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    marginVertical: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    height: 400,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 64,
    marginHorizontal: 16,
  },
});
