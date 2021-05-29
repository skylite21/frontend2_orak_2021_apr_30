import 'firebase/auth';
import { firedb } from './database';

export async function signUp(email, password) {
  // a try blockon belüli részben ha hiba van akkor azt a catch blokkban elkaphatjuk
  try {
    // regisztráljuk a user-t az email, password bemeneti paraméterek segítségével
    const user = await firedb.auth().createUserWithEmailAndPassword(email, password);
    // ha sikerült a regisztráció akkor a signUp fügvény vissza adja a user-t
    return user;
  } catch (error) {
    console.log(error);
    // az error változó a catch blokk-ban létezik, a try-ban létrejött hibát tárolja
    window.alert(error.message);
  }
}


export async function signIn(email, password) {
  try {
    const user = await firedb.auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function resetPassword(email) {
  try {
    await firedb.auth().sendPasswordResetEmail(email);
    console.log('email sent');
  } catch(e) {
    console.log('error: ', e);
  }
}

export async function signOut() {
  try {
    const user = await firedb.auth().signOut();
  } catch (error) {
    console.log(error);
  }
}

export function loginStatus() {
  return new Promise( (resolve, reject) => {
    firedb.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject('no user');
      }
    });
  });
}
