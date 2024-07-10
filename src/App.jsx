import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import AddInfo from './AddNewPerson/AddInfo';
import Retrieve from './RetrieveData/Retrieve';
import { PeopleProvider } from './PeopleContext';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <AddInfo /></> 
    },
    {
      path: "/retrieve",
      element: <> <Navbar /> <Retrieve /> </>
    }
  ]);

  return (
    <PeopleProvider>
      <RouterProvider router={router} />
    </PeopleProvider>
  );
}

export default App;
