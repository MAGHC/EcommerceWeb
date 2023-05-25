# READ ME 

first of all, thank you for giving me this opportunity



# Tech Stack 

"react": "^18.2.0", 

"react-query": "^3.39.3",

"react-router-dom": "^6.11.2",

"typescript": "^4.9.5",

"firebase": "^9.22.0",   // backend API 


# FOLDER TREE 
```
📦src
 ┣ 📂components
 ┃ ┣ 📂CartCard
 ┃ ┃ ┣ 📜CartCard.module.css
 ┃ ┃ ┗ 📜CartCard.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.module.css
 ┃ ┃ ┗ 📜Hedaer.tsx
 ┃ ┣ 📂ImageViewer
 ┃ ┃ ┣ 📜ImageViewer.module.css
 ┃ ┃ ┗ 📜ImageViewer.tsx
 ┃ ┣ 📂ProductCard
 ┃ ┃ ┣ 📜ProductCard.module.css
 ┃ ┃ ┗ 📜ProductCard.tsx
 ┃ ┗ 📂ProductList
 ┃ ┃ ┣ 📜ProductList.module.css
 ┃ ┃ ┗ 📜ProductList.tsx
 ┣ 📂pages
 ┃ ┣ 📂Cart
 ┃ ┃ ┣ 📜CartPage.module.css
 ┃ ┃ ┗ 📜CartPage.tsx
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📜Home.module.css
 ┃ ┃ ┗ 📜Home.tsx
 ┃ ┣ 📂NewProduct
 ┃ ┃ ┣ 📜NewProduct.module.css
 ┃ ┃ ┗ 📜NewProduct.tsx
 ┃ ┗ 📂ProductDetailPage
 ┃ ┃ ┣ 📜ProductDetailPage.module.css
 ┃ ┃ ┗ 📜ProductDetailPage.tsx
 ┣ 📂scheme
 ┃ ┣ 📜cart.ts
 ┃ ┗ 📜products.ts
 ┣ 📂service
 ┃ ┗ 📜firebase.ts
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜Layout.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```


# List of feature implementations


## MVP 

### Admin 

- [x] create new product (with firebase  and async fn => handle synchronous)
      - image upload (multiple) 
      - upload img => convert url => database set 
      - optoin, title ... product value set
 

### Product List 

- [x] show Product List from backend 
- [x] if  user  onclick , pass the product information with navigate fn 
- [x] if product hotsale  filter productList   




### Product Detail Page & Add to Cart Button
- [x] show Product Detail from useLocation  
- [x] if user click addCart btn ,  Update backend



### Cart Detail Page
- [x] show Cart Detail from backend 
- [x] click Plus , Minus Btn => change quantity 
- [x] click "X" btn => delete Cart 
- [x] show total 
- [x] if no have  Cart Item , show phrase "plase add cart item"  



# Remaining work as i think 

- [ ] handling react-query stale tiem , mutate 
- [ ] ux,ui 
- [ ] refactoring 






