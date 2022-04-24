import { db } from '../../firebase';

export const verify = (firstName, middleName, lastName, fullName, gender, birthday, firstVaccBrand, firstPlace, firstDate, 
    secondVaccBrand, secondPlace, secondDate, vaccBrand, place, date, handle) => {

  var docRef = db.collection("users").doc(fullName.toLowerCase());
  console.log(fullName)

  docRef.get().then((doc) => {
      if (doc.exists) {
        if (doc.data().fname === firstName && doc.data().mname === middleName && doc.data().lname === lastName &&
            doc.data().gender === gender && doc.data().birthday === birthday && doc.data().firstDate === firstDate &&
            doc.data().firstVaccBrand === firstVaccBrand && doc.data().firstPlace === firstPlace &&
            doc.data().secondDate === secondDate && doc.data().secondVaccBrand === secondVaccBrand &&
            doc.data().secondPlace === secondPlace && doc.data().place === place && doc.data().vaccBrand === vaccBrand &&
            doc.data().date === date) {
              console.log("Document data:", doc.data());
              console.log("Document data1:", doc.data().fname);
              handle.handleNext();
        }
        else {
          handle.handleNoRecord();
          console.log('somethings wrong, we couldn\'t find you in our databse');
        }
      } else {
        // doc.data() will be undefined in this case
        handle.handleNoRecord();
        console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
}