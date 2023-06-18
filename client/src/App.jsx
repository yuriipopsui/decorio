import { Suspense } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import routes from "./config/router";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import styles from "./App.module.scss";
import Loader from "./components/Loader/Loader";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  // const [count, setCount] = useState(0)
  //Temporary isAuth === true
  let isAuth = true;
  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.content}>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(
              ({ Component, props, isPrivate, isPublicOnly, ...route }) => (
                <Route
                  {...route}
                  key={route}
                  element={
                    isPrivate ? (
                      <PrivateRoute isAyth={isAuth}>
                        <Component {...props} />
                      </PrivateRoute>
                    ) : (
                      <PublicRoute isAyth={isAuth} isPublicOnly={isPublicOnly}>
                        <Component {...props} />
                      </PublicRoute>
                    )
                  }
                />
              )
            )}
          </Routes>
          <Outlet />
        </Suspense>
      </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
