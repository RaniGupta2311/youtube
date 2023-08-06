import './App.css';
import Head from "./components/Head";
import Body from "./components/Body";
import {Provider} from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchPage from "./components/SearchPage";
import VideoContainer from './components/VideoContainer';
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
      children:[
          {
            path:"/",
            element:<VideoContainer/>
          },
          {
            path:"/search",
            element:<SearchPage/>
          }
      ]
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }
  ]
}]);

function App() {
  return (
    <Provider store={store}>
           <div className="h-screen">
            <Head/>
            <RouterProvider router={appRouter}/>
        </div>
      </Provider>  
  );
}

export default App;
