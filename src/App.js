
import './App.css';
import { ProductList } from './Grocery/ProductsList';
import { TabFile } from './Tabs/TabFile';
import { Todo } from './features/Todo';
import { User } from './features/User';

function App() {
  return (
    <div className="App">
      {/* <ProductList /> */}
      {/* <TabFile /> */}
      {/* <Todo /> */}
      <User />
    </div>
  );
}

export default App;
