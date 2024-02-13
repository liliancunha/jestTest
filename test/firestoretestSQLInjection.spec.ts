describe('Testing hello word', () => {
   
    it('bla', () => {
        console.log("olá")
    });
    
});

// Create a reference to the cities collection
import {Firestore} from '@google-cloud/firestore';
// Create a new client
const firestore = new Firestore(); 

getMultiple(firestore, '', '', '')
 

async function getMultiple(db, collection: string, field: string, value: string) {
    // [START firestore_data_query]
    const collectionRef = db.collection(collection);
    const snapshot = await collectionRef.where(field, '==', value).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  
  
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
    // [END firestore_data_query]
  }