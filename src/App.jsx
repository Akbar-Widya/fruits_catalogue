const PRODUCTS = [
   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const FilterableProductTable = ({ products }) => {
   return (
      <div>
         <SearchBar />
         <ProductTable products={products} />
      </div>
   );
};

const SearchBar = () => {
   // return (
   //    <form action="">
   //       <input type="text" name="" placeholder="Search..." id="" />
   //       <label>
   //          <input type="checkbox" /> Only show products in stock
   //       </label>
   //    </form>
   // );
};

const ProductTable = () => {
   return (
      <table>
         <thead>
            <tr>
               <th>Name</th>
               <th>Price</th>
            </tr>
         </thead>
         <tbody>
            <ProductRows />
         </tbody>
      </table>
   );
};

const ProductRows = () => {
   const rows = [];
   const productRows = PRODUCTS;
   productRows.map((product) => {
      rows.push(
         <tr key={product.name}>
            <td>{product.name}</td>
            <td>{product.price}</td>
         </tr>
      );
   });
   return <>{rows}</>;
};

// const ProductTable = ({ products }) => {
//    const rows = [];
//    let lastCategory = null;

//    products.forEach((product) => {
//       if (product.category !== lastCategory) {
//          rows.push(
//             <ProductCategoryRow
//                category={product.category}
//                key={product.category}
//             />
//          );
//       }
//       rows.push(
//          <ProductRow
//             product={product}
//             key={product.name}
//          />
//       );
//       lastCategory = product.category;
//    })

//    return (
//       <table>
//          <thead>
//             <tr>
//                <th>Name</th>
//                <th>Price</th>
//             </tr>
//          </thead>
//          <tbody>{rows}</tbody>
//       </table>
//    )
// };

// const ProductRow = ({ product }) => {
//    const name = product.stocked ? product.name :
//       <span style={{ color: 'red' }}>
//          {product.name}
//       </span>

//    return (
//       <tr>
//          <td>{name}</td>
//          <td>{product.price}</td>
//       </tr>
//    )
// };

const ProductCategoryRow = ({ category }) => {
   return (
      <tr>
         <th colSpan="2">{category}</th>
      </tr>
   );
};
const App = () => {
   return <FilterableProductTable products={PRODUCTS} />;
};
export default App;
