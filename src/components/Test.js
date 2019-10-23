import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Test extends Component {
  render() {
    const random = Math.random();
    return (
      <Router >
      <Route
        render={({ location }) => (
          <div>
            <ul >
              <NavLink to={"/product/"+random}>product23</NavLink>
              <NavLink to="/product/22">product22</NavLink>
              <NavLink to="/case">case</NavLink>
              <NavLink to="/">index</NavLink>
              {/*<NavLink to="/hsl/10/90/50">product23</NavLink>
              <NavLink to="/hsl/120/100/40">product22</NavLink>*/}
            </ul>

            <div >
              
               
                  <Switch location={location}>
                    <Route exact path="/product/:id" component={HSL} />
                    <Route exact path="/case" component={Case} />
                    <Route exact path="/" component={Index} />
                    {/* Without this `Route`, we would get errors during
                    the initial transition from `/` to `/hsl/10/90/50`
                */}
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
            
            </div>
          </div>
        )}
      />
    </Router>
    )
  }
}
function HSL({ match: { params } }) {
  return (
    <div>
      {params.id}
    </div>
  );
}
function Case({ match: { params } }) {
  return (
    <div>
      我是case
    </div>
  );
}
function Index({ match: { params } }) {
  return (
    <div>
      我是index
    </div>
  );
}
export default Test

