import './App.css';
import { Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import EditProductScreen from './Screens/EditProductScreen';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  // const [state, setstate] = useState([]);

  // useEffect(() => {
  //   effect
  //   return () => {
  //   }
  // }, [input])

  return (
    <div className="App">
          <Route path="/api/product/:id/edit" component={EditProductScreen} />
          <Route path="/api/product/:id" component={ProductScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
        <main className="container-fluid">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
            {/* <nav>
              <ul>
                  {
                    products.products.map( product => 
                      <li key={product._id}>
                        <div>
                          <span>{product.name}</span>
                          <span>{product.brand}</span>
                          <span>{product.price}</span>
                        </div>
                      </li>
                    )
                  }
              </ul>
            </nav> */}
          </header>
        </main>
    </div>
  );
}

export default App;
