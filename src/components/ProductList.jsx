import Product from "./Product";

const products = [
  { id: 1, name: "Laptop", price: 1000, image: "https://http2.mlstatic.com/D_NQ_NP_997408-MLU74224381358_022024-O.webp" },
  { id: 2, name: "Auriculares", price: 200, image: "https://s3-sa-east-1.amazonaws.com/saasargentina/gkaa7tU3WGIXaDHShkW6/imagen" },
  { id: 3, name: "Mouse", price: 50, image: "https://inkgenio.com.ar/6324-large_default/mouse-inalambrico-genius-nx-7010-blue.jpg" },
  { id: 4, name: "Teclado mecánico", price: 150, image: "https://www.mastecnologia.com.ar/images/productos/16633.png" },
  { id: 5, name: "Monitor 24''", price: 300, image: "https://mundofixar.vtexassets.com/arquivos/ids/2500086/Monitor-HKC-ANTTEQ-F2145M-21-45-75hz-1.jpg?v=638562151017700000" },
  { id: 6, name: "Parlantes Bluetooth", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVXqtqjAnZeaTdfcizh9RFcrRV5aBHqj6vg&s" },
  { id: 7, name: "Cámara Web HD", price: 80, image: "https://www.eikonweb.com.ar/Temp/App_WebSite/App_PictureFiles/Items/WEB1080P_800.jpg" },
];

const ProductList = () => {
  return (
    <div className="center container text-center mx-auto my-10 bg-white dark:bg-gray-900">
      <h2 className="mb-8 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Productos</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;



