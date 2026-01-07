interface pInterface {
    textvalue: string
 }

export const Hilsen = (props: pInterface) => {

    return (
        <>
            <section>
                <article>
                    <p style={{ backgroundColor: "pink", color: "white" }}> 
                        {props.textvalue}
                    </p>
                </article>
            </section>
        </>
    )
}
