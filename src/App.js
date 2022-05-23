// newer version don't need a react import
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
// ignore this is for redux toolkit
// import { decrement, increment, incrementByAmount } from './redux/slices/counterSlice';
// import { useSelector, useDispatch } from 'react-redux';

function App() {
  // ignore this is for redux toolkit
  // const count = useSelector(state => state.counter.value)
  // const dispatch = useDispatch()

  return (
    <Router>
    <div className="App">
      {/* Nest Navbar */}
      <Navbar />

      <div className="content">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          {/* Dynamic Path */}
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>

          {/* picks up any path, commonly used to serve a 404 page to user */}
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </div>

    </div>
    </Router>
  );
}

// export default allows components to be used in other files
export default App;
