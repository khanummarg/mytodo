import Product from "./components/product/Product";
import Todo from "./components/toDo/Todo"

const fruits = [
  {
    id: 1,
    name: "apple",
    price: "2$",
    description: "Fresh apple"
  },
  {
    id: 2,
    name: "avocado",
    price: "7$",
    description: "Fresh avocado"
  },
  {
    id: 3,
    name: "bannana",
    price: "3$",
    description: "Fresh bannana"
  },
];

function App() {

  const li = fruits.map((fruit) => {
    return <li key={fruit.id}>
      <Product 
      name={fruit.name} 
      description={fruit.description} 
      price={fruit.price} />
    </li>
  })
  
  return (
    <div>
      <ul>
       {li}
      </ul>


    <Todo />


    </div>
  );
}

export default App;
