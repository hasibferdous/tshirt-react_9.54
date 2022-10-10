/**
 * BASIC ROUTER SETUP:
 * 
 * 1. yarn add react-router-dom
 * 2. create a router using createBrowserRouter
 * 3. add RouterProvider and set router props (at app.js)
 * 4. create a lot of components(home,orders,header, main)
 * 5. create main layout with some common part and one changing part based on the route
 * 6. set main layout at the root of the route(in Main.js -> Header,Outlet), (in App.js -> Main)
 * 7. set children routes(      
 *      {
      path: '/',element: <Main></Main>, 
      children:[
        {path: '/',element:<Home></Home>},
        {path: '/orders',element:<Orders></Orders>}
                ]
        }
      )
 * 8. set links on the header components (
            <Link to='/'>Home</Link>
            <Link to='/orders'>Orders</Link>
        )

    


  CONTEXT API SETUP
  1. declare a context
  2. set provider
  3. use Context in the place where you want to get the context
 */