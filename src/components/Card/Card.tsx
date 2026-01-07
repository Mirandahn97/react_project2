import style from "./Card.module.scss"

interface CardInterface {
    children: React.ReactNode
}

export function Card({ children }: CardInterface) {

    return (
        <>
        <div className={style.card}>{children}</div>
        </>
    )
}