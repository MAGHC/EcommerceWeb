import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child, set } from 'firebase/database';
import { NewProductType, Product } from '../scheme/products';
import {
  getDownloadURL,
  getStorage,
  ref as stroageRef,
  uploadBytes,
  listAll,
} from 'firebase/storage';
import { AddCartT } from '../scheme/cart';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();
const dbRef = ref(getDatabase());
const storage = getStorage();

export async function getAllProducts(): Promise<Product[] | []> {
  return await get(child(dbRef, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return Object.values(snapshot.val());
    } else {
      console.log('no');
      return [];
    }
  });
}

export async function addProduct(newProduct: NewProductType, imgs: Blob[]) {
  const id = Date.now().toString();

  const imgListRef = stroageRef(storage, `imgages/${id}`);

  const uploadProcess = imgs.map(async (img, i) => {
    const imgRef = stroageRef(storage, `imgages/${id}/${i}`);
    await uploadBytes(imgRef, img);
  });

  await Promise.all(uploadProcess);

  const imageList = (await listAll(imgListRef)).items;

  const imageUrls: string[] = [];

  const convertUrlProcess = imageList.map(async (item) => {
    const res = await getDownloadURL(item);
    imageUrls.push(res);
  });

  await Promise.all(convertUrlProcess);

  const product = { ...newProduct, id, imgs: imageUrls };

  const res = await set(child(dbRef, `products/${id}`), product);
  return res;
}

export async function addAndEditCart(cart: AddCartT) {
  const quantity = 1;

  set(child(dbRef, `carts/user/${cart.id}`), {
    ...cart,
    quantity,
  });
}
