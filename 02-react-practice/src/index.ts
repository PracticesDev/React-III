export const Index: string = `html,body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: #282c34;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


.main-layout {
  display: flex;
  flex-direction: row;
}

nav {
  background-color: #363a45;
  height: 100vh;
  margin-right: 15px;
  overflow-y: scroll;
  text-align: center;
  width: 250px;
}

nav ul {
  padding-left: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

nav li {
  list-style: none;
  margin-bottom: 10px;
}

nav li a {
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
}

.nav-active {
  color: grey;
  transition: all .3s ease-out;
}`;
