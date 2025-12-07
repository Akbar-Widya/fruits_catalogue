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

// I think the products data should be fethed here, because rows <tr> is always inside table
// Although search bar might need the products data too. That way we need to lift the variable
// ..one level above ProductTable or SearchBar
// Why? smart question. That's because we should approach using one source of data
// ..even if a data fetch from or post to data API is always the same place regardless it's a nice safe measure
// Comment lines below comes from AI bot, I also just realized this, although I might knew it unconsciously
// ..to avoid data inconsistency. Imagine if SearchBar and ProductTable each fetches the data separately
// ..what if one fetch is successful but the other fails? Then we have inconsistent data state in the app
// Still though, When code I love to start small and simple, then refactor later when needed
// refactor is a method to improve code structure without changing its functionality (thanks AI bot)
// like building ProductRow component first & render the data here momentarily, until further development causing this component to be updated
const ProductTable = () => {
   const products = PRODUCTS;
   return (
      <table>
         <thead>
            <tr>
               <th>Name</th>
               <th>Price</th>
            </tr>
         </thead>
         <tbody>
            <ProductRow products={products} />
         </tbody>
      </table>
   );
};

const ProductRow = ({ products }) => {
   return (
      <>
         {products.map((product) => (
            <tr key={product.name}>
               <td>{product.name}</td>
               <td>{product.price}</td>
            </tr>
         ))}
      </>
   );
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
