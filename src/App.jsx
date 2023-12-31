// Import de createBrowerserRouter et RouterProvier de react-router-dom (Pour installer react-router-dom : pnpm install react-router-dom)
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

// Import de composant afin de les utiliser dans ce composant
import Inscription from './Pages/Inscription/Inscription'
import Layout from './Layout/Layout'
import Error from "./Pages/Error/Error"
import About from './Pages/About/About'
import Docknotes from './Projet/Docknotes/Docknotes'
import Todo from './Pages/Todo/Todo'


function App() {
  // Création d'une const router pour créer le router avec createBrowserRouter
  const router = createBrowserRouter([
    // Création de la route par défaut "/" pour le rediriger sur le composant Layout (element: <Layout/>) et si la page n'exsite pas vers le composant Error (errorElement: <Error/>)
    {
      path: "/",
      element: <Layout/>,
      errorElement: <Error/>,
      // Création d'enfant pour définir les différentes routes (URL NAVIGATEUR) pour les rediriger vers les autres composants
      children:[
        // Redirection vers le composant Inscription (Page inscription) avec le "/inscription" par exemple si notre site est Facebook : facebook.com/inscription
        {
          path: "/inscription",
          element: <Inscription/>,
          errorElement: <Error/>,
        },
        // La même chose pour le /about (facebook.com/about) pour nous rediriger sur le composant about
        {
          path: "/about",
          element: <About/>,
          errorElement: <Error/>,
        },
        {
          path: "/docknotes",
          element: <Docknotes/>,
          errorElement: <Error/>,
        },
        {
          path: "/todo",
          element: <Todo/>,
          errorElement: <Error/>,
        },
      ],
    },
  ]);

  return (
    <>
      {/* Nous retourons la const router dans un RouterProvider afin de pouvoir utiliser les routes */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
