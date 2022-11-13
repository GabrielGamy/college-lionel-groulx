import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import { Stack, ListItem, Avatar, Button } from '@react-native-material/core';
import { getProfile, getData, clearData } from '../services/userService';
import { getAllMessages } from '../services/messageService';
import Constants from '../Constants';

const adminData = {
  id: 'ExNr00GVAEcfu2oBpouqbsRoIvt2',
  email: 'support@contoso.ca',
  displayName: 'Support',
};

export default function Home({ navigation }) {
  const isFocused = useIsFocused();
  const [userData, setUserData] = useState();
  const [lastMessages, setLastMessages] = useState([]);

  useEffect(() => {
    (async () => {
      const tokenData = await getData();
      if (tokenData && tokenData.idToken) {
        const userProfile = await getProfile(tokenData.idToken);
        if (!checkSessionExpired(userProfile)) {
          setUserData(userProfile.users[0]);
          await getConversations(userProfile.users[0].localId);
        }
      }
    })();
  }, [isFocused]);

  useEffect(() => {
    // Obtenir uniquement les message de l'utilisateur connecté.
    const currentMessages = lastMessages.filter(
      (m) => m.from.id === userData.localId || m.to.id === userData.localId
    );
    setLastMessages(currentMessages);
  }, [userData]);

  const getConversations = async (localUserId) => {
    const conversations = await getAllMessages(localUserId);
    if (!checkSessionExpired(conversations.data)) {
      // Obtenir uniquement les message de l'utilisateur connecté.
      const recipientIds = Object.keys(conversations.data);
      const currentMessages = lastMessages;

      if (recipientIds.length) {
        // Obtenir les derniers messages
        Object.keys(conversations.data).forEach((userId) => {
          const messageCount = conversations.data[userId].length;
          const lastMessage = conversations.data[userId][messageCount - 1];

          const existingIndex = currentMessages.findIndex(
            (m) => m.from.id === userId || m.to.id === userId
          );

          if (existingIndex >= 0) {
            /**
             * Si la conversation existe déjà, 
             * récupérer le dernier message de cette conversation pour l'afficher.*
             */
            currentMessages[existingIndex] = lastMessage;
          } else {
            // Sinon ajouter simplement à la liste des derniers messages.
            currentMessages.push(lastMessage);
          }
        });

        setLastMessages([...currentMessages]);
      } else {
        // Aucun message pour l'instant
        setLastMessages([]);
      }
    }
  };

  const checkSessionExpired = (response) => {
    if (
      response &&
      response.success === false &&
      response.error?.message === 'INVALID_ID_TOKEN'
    ) {
      logout();
      return true;
    }
    return false;
  };

  const logout = async () => {
    await clearData();
    navigation.navigate('Login');
  };

  const fromUser = (message) => {
    return message.to.id === userData.localId ? message.from : message.to;
  };

  return (
    <Stack spacing={4} style={{ flex: 1 }}>
      <View>
        {lastMessages.map((message) => {
          return (
            <ListItem
              onPress={() => {
                navigation.navigate('Discussions', {
                  withUser: fromUser(message),
                });
              }}
              leadingMode="avatar"
              leading={
                <Avatar
                  color={Constants.primary}
                  image={require('../assets/avatardefault.png')}
                />
              }
              title={fromUser(message).displayName}
              secondaryText={`${message.content.substring(0, 30)}...`}
            />
          );
        })}
      </View>
      {lastMessages.length === 0 &&
        userData &&
        userData.email !== adminData.email && (
          <View style={{ margin: 32 }}>
            <Button
              title="Débuter la discussion"
              color={Constants.primary}
              tintColor={'white'}
              onPress={() => {
                navigation.navigate('Discussions', {
                  withUser: adminData,
                });
              }}
            />
          </View>
        )}
    </Stack>
  );
}

const styles = StyleSheet.create({});
