import React, { Suspense } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Loading from "@/components/Loading"

const HomeRouters = ({ Menus }) => {
  // const router = menu => {
  //   return (
  //     <Route key={menu.title} path={menu.path} component={menu.component} />
  //   )
  // }
  // ;<Switch>
  //   <Redirect from="/" to={Menus[0].path} status={Menus[0].title} />
  //   {Menus.map(menu =>
  //     menu.subMenu ? menu.subMenu.map(item => router(item)) : router(menu)
  //   )}
  // </Switch>

  const router = menu => (
    <Route key={menu.title} path={menu.path} component={menu.component} />
  )

  return (
    <Suspense fallback={<Loading />}>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      {Menus.map(menu =>
        menu.subMenu ? menu.subMenu.map(item => router(item)) : router(menu)
      )}
    </Suspense>
  )

  // return <div>
  //   <Route path="/dashboard" component={DashBoard} />
  // </div>
}
export default HomeRouters
