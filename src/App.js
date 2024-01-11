  import React from 'react';
  import './App.css';
  import Head from './Components/Head';
  import Body from './Components/Body';
  import { Provider } from 'react-redux';
  import store from './utils/store';
  import { RouterProvider, createBrowserRouter } from 'react-router-dom';
  import MainContainer from './Components/MainContainer';
  import WatchPage from './Components/WatchPage';

  // Use an empty string as the path for the main route
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "watch",
        element: <WatchPage/>
      }
    ]
  }]);

  function App() {
    return (
      <Provider store={store}>
        <div>
          <Head />
          {/* Use appRouter directly without wrapping it in Routes */}
          <RouterProvider router={appRouter} />
          {/* 
            Header 
            Body -> [Sidebar[home,]->[MenuItems], MainContainer->[[ButtonsList], VideoContainer->[Videocards]]
          */}
        </div>
      </Provider>
    );
  }

  export default App;
