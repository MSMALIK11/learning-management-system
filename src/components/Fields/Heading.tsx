interface headingType {
    title: string,
    size?: string,
    color?: string,
    className?: string,
    mt?: string,
    bold?: string
}
function Heading(props: headingType) {
    return (
        <h1 className={props.className} style={{ marginTop: props.mt, fontWeight: props.bold, fontSize: props.size ?? '14px', color: props.color ?? '#494949' }}>{props.title}</h1>
    )
}

export default Heading