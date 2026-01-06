import style from "./Navbar.module.scss"
export const Navbar = () => {

    return (
        <>
        <nav>
            <ul className={style.ul}>
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