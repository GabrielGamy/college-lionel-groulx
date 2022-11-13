const DATABASE_URL =
  'https://aec-420-160-lg-default-rtdb.firebaseio.com/conversations';

const getAllMessages = async (fromUserId) => {
  var response = await fetch(`${DATABASE_URL}/${fromUserId}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  var data = await response.json();
  return { success: response.ok, data };
};

const getMessages = async (fromUserId, toUserId) => {
  var response = await fetch(`${DATABASE_URL}/${fromUserId}/${toUserId}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  var data = await response.json();
  return { success: response.ok, data };
};

const sendMessage = async (fromUserId, toUserId, messages) => {
  var response = await fetch(`${DATABASE_URL}/${fromUserId}/${toUserId}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messages),
  });

  var data = await response.json();
  return { success: response.ok, ...data };
};

export { getMessages, sendMessage, getAllMessages };
