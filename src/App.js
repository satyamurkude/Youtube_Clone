
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
function App() {
  return (
    <Provider store={store}>
   <div>
    <Head/>
    <Body/>
    {
      /* 
      Header 
      Body ->[Sidebar[home,]->[MenuItems],MainContainer->[[ButtonsList], VideoContainer->[Videocards]]

      
      
      */
    }
   </div>
   </Provider>
  );
}



export default App;
