// import React from 'react'
// import { useSelector } from 'react-redux'
// import PageNotFound from '../pages/PageNotFound';
// import Guard from "./guard/Guard";

// const routes = [
//     {
//         path: '/',
//         component: PageNotFound,
//         permissions: ['anyallow'],
//     }
// ]

// const Guard = (props) => {
//     let permissions = ['admin', 'superAdmin'];
//     const loginUser = useSelector((state) => state.auth.loginUser);
//     const controls = () => {
//         if(props.permissions.includes('anyllow')){
//             return true;
//         }
//         if (loginUser == null) {
//             return false;
//         }
//         if (!permissions.includes(loginUser.userType)) {
//             return false;
//         }
//         return true;
//     }
//     const fkjsdhfkjdshf = () => {
//         routes.map((item) => {
//             return (
//                 <Guard permissions={item.permissions}>
//                     <Route path={item.path} element={item.component} ></Route>
//                 </Guard>
//             )
//         })
        
//     }
//     return (
//         <>
//             {controls() ? props.children : <PageNotFound />}
//         </>
//     )
// }

// export default Guard