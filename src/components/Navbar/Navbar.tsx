import { useState } from "react"
import style from "./Navbar.module.scss"
import react from "../../assets/react.svg"


export const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className="style.nav">
                <img className={style.react} src={react} alt="Logo" />

                <button className={style.burger}
                    onClick={() => setOpen(!open)}>MENU</button>

                <ul className={`${style.ul} ${open ? style.open : ""}`}>
                    <li className={style.li}>
                        <a className={style.a} href="#">Om os</a>
                    </li>
                    <li className={style.li}>
                        <a className={style.a} href="#">Galleri</a>
                    </li>
                    <li className={style.li}>
                        <a className={style.a} href="#">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}