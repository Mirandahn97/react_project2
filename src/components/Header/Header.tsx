import style from "./Header.module.scss"
import båd from "../../assets/båd.jpeg"

export const Header = () => {

    return(
    <>
        <h1 className={style.overskrift}>React 1. project</h1>
        <article>
        <img className={style.båd} src={båd} alt="" />
            <p className={style.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam perspiciatis praesentium temporibus reprehenderit magnam, voluptate consequuntur ratione? Quibusdam quasi quas id quidem soluta, rerum tempora, asperiores ullam necessitatibus doloremque animi!</p>
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda cumque temporibus nemo molestiae laboriosam iure hic ab reiciendis magnam repellendus sit autem, illum esse ratione possimus quas delectus voluptatibus nobis?</p>
        </article>
    </>
    )
}