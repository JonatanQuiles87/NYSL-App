import * as React from "react";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import Navbar from "./components/Navbar";  // In this case default export is used, and we do not need to use braces.
// import NavbarTest from "./components/Navbar";  // And we don't have to use the same component name, we could have directly used a different name like in this line.

import {Home} from "./components/Home"; // In case the Named export is used, we import them in curly brackets.
// If Home were exported default then we would need to import it here without curly brackets
// import {Home as TestHome} from "./components/Home";  // We could have also changed the component name like this.
// import * as MainComponents from "./components/Home"; // We can import all components together from a module, and we can use MainComponents.Home and MainComponents.Lala here

import {OrderPageTemp} from "./components/OrderPageTemp";
// import {Games} from "./components/Games"; Lazy load is used instead of this

// import Schedule from "./components/Schedule";  // This was normal load
const LazySchedule = React.lazy(() => import('./containers/Schedule')); // This is lazy load
const LazyGames = React.lazy(() => import('./containers/GamePage'));
const LazyMessages = React.lazy(() => import('./containers/MessagesPageWrapper'));
const LazyPictures = React.lazy(() => import('./containers/PicturesPageWrapper'));

function App() {
    return (
        <div>
            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="schedule" element={
                        <React.Suspense fallback='Loading...'>
                            <LazySchedule/>
                        </React.Suspense>}/>
                    <Route path='order-summary' element={<OrderPageTemp/>}/>
                    {/*<Route path='/gamePage/:id' element={<Games/>}/>*/}
                    <Route path="gamePage/:id" element={
                        <React.Suspense fallback='Loading...'>
                            <LazyGames/>
                        </React.Suspense>}/>

                    <Route path="gamePage/:id/messages" element={
                        <React.Suspense fallback='Loading...'>
                            <LazyMessages/>
                        </React.Suspense>
                    }/>

                    <Route path="gamePage/:id/pictures" element={
                        <React.Suspense fallback='Loading...'>
                            <LazyPictures/>
                        </React.Suspense>
                    }/>

                    {/*    /!* Using path="*"" means "match anything", so this route*/}
                    {/*acts like a catch-all for URLs that we don't have explicit*/}
                    {/*routes for. *!/*/}
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <Navbar/>
            <hr/>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <p>Before children</p>
            <Outlet/>
            <p>After children</p>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default App;  // Only one default export allowed per module.
