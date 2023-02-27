import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage/index..js";
import { Img, NavBar, NavItem, NavList, StyledNavLink } from "./styled";
import logo from "./logo.ico";

export const App = () => (
  <HashRouter>
    <NavBar>
      <StyledNavLink to="/tasks">
        <Img src={logo} alt="logo" />
      </StyledNavLink>
      <NavList>
        <NavItem>
          <StyledNavLink to="/tasks">To-do list</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/author">About author</StyledNavLink>
        </NavItem>
      </NavList>
    </NavBar>
    <Switch>
      <Route path="/tasks/:id">
        <TaskPage />
      </Route>
      <Route path="/tasks">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="tasks" />
      </Route>
    </Switch>
  </HashRouter>
);
