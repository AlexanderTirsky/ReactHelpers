import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.css";
import { Header } from "../Header";

export const MainLayout = () => {
  const correntYear = new Date().getFullYear();
  
  return (
    <div className={cls.mainLayout}>
    <Header />
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
