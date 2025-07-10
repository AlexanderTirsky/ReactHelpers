import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.css"

export const MainLayout = () => {
  const correntYear = new Date().getFullYear();
  
  return (
    <div className={cls.mainLayout}>
    <header>Header</header>
    <div className={cls.mainWrapper}>
    <main className={cls.main}>
      <Outlet />
    </main>
    <footer className={cls.footer}>React Questing Cards Application | {correntYear} <br />
    by Alexander Tirsky
    </footer>
    </div>
    </div>
  )
}
