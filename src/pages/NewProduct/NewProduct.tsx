import { useState } from 'react';
import { NewProductType } from '../../scheme/products';
import style from './NewProduct.module.css';
import { addProduct } from '../../service/firebase';

const DEFUALT_PRODUCT_STATE = {
  title: '',
  description: '',
  price: 0,
  hotsale: false,
  categorie: '',
  options: '',
};

const NewProduct = () => {
  const [product, setProduct] = useState<NewProductType>(DEFUALT_PRODUCT_STATE);
  const [imgs, setImgs] = useState<Blob[] | null>(null);

  console.log(product, '핫세일');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    if (name === 'hotsale') {
      setProduct((prev) => ({ ...prev, [name]: checked }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files as FileList;

    setImgs([...files]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('동작확인');
    if (imgs === null) {
      return;
    }
    addProduct(product, imgs);
    setProduct(DEFUALT_PRODUCT_STATE);
    setImgs(null);
  };

  return (
    <section>
      {imgs && <img src={URL.createObjectURL(imgs[0])} alt="preview"></img>}

      <form onSubmit={handleSubmit}>
        <input
          required
          name="title"
          id="title"
          onChange={handleChange}
          value={product.title}
          type="text"
        />
        <label htmlFor="title">title</label>
        <input
          required
          name="price"
          id="price"
          onChange={handleChange}
          value={product.price}
          type="number"
        />
        <label htmlFor="price">price</label>
        <input
          name="description"
          id="description"
          onChange={handleChange}
          value={product.description}
          type="text"
        />
        <label htmlFor="description">description</label>
        <input
          checked={product.hotsale}
          required
          id="hotsale"
          name="hotsale"
          onChange={handleChange}
          type="checkbox"
        />
        <label htmlFor="hotsale">hotsale</label>
        <input
          required
          name="imgs"
          id="imgs"
          onChange={handleFileChange}
          type="file"
          multiple
          accept="image/*"
        />
        <label htmlFor="imgs">imgs</label>
        <input
          required
          name="options"
          id="options"
          onChange={handleChange}
          value={product.options}
          type="text"
        />
        <label htmlFor="options">
          options {`( if you have options more than 2 you have to seperate ',' each other)`}
        </label>
        <input
          required
          name="categorie"
          id="categorie"
          onChange={handleChange}
          value={product.categorie}
          type="text"
        />
        <label htmlFor="categorie">categorie</label>
        <button>전송</button>
      </form>
    </section>
  );
};

export default NewProduct;
