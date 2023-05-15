import * as React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// // 懒加载组件
// const HomePage = React.lazy(() => import('./HomePage'));
// const AboutPage = React.lazy(() => import('./AboutPage'));
// const ContactPage = React.lazy(() => import('./ContactPage'));
// const ProductsPage = React.lazy(() => import('./ProductsPage'));

// 组件类型定义
type Props = {
  title: string;
  description: string;
};

type PageProps = Props & {
  routeProp: string;
};

// 路由表
const AppRouter: React.FC = () => {
  return (
    <div>
        
    </div>
    // <Router>
    //   <React.Suspense fallback={<div>Loading...</div>}>
    //     <Switch>
    //       <Route  path="/" render={() => <HomePage title="Home" />} />
    //       <Route
    //         path="/about"
    //         render={(props: PageProps) => (
    //           <AboutPage {...props} title="About" description="This is the about page." />
    //         )}
    //       />
    //       <Route
    //         path="/contact"
    //         render={() => <ContactPage title="Contact" />}
    //       />
    //       <Route
    //         path="/products"
    //         render={() => <ProductsPage title="Products" />}
    //       />
    //     </Switch>
    //   </React.Suspense>
    // </Router>
  )
};

export default AppRouter;
