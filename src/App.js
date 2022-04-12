import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            {/* "our-domain.com/products/<anything>" colon (:) is obligatory */}
            <ProductDetail />
          </Route>
        </Switch> 
        {/* Switch component ensures only on route (first in line) is active while several routes 
        could have the same path. 'exact' prop ensures the route is active only if the path is 
        exactly matched */}
      </main>
    </div>
  );
}

export default App;
