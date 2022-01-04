import firebase from "./firebase";

const createStudent = (fullName, note) => {
  const newStudent = {
    id: firebase.database().ref().child("students").push().key,
    fullName,
    note,
    creationDate: new Date().toISOString(),
  };

  firebase
    .database()
    .ref("students/" + newStudent.id)
    .set(newStudent);
};

const getStudents = (callback) => {
  const dbStudentsRef = firebase.database().ref("students/");
  dbStudentsRef.on("value", (snapshot) => {
    const studentList = snapshot.val() || {};
    callback(studentList);
  });
  return dbStudentsRef;
};

const deleteStudent = (contactId) => {
  firebase
    .database()
    .ref("students/" + contactId)
    .remove();
};

export { createStudent, getStudents, deleteStudent };
