interface Props {
    errorMsg: string
}
const ErrorMessage: React.FC<Props> = ({errorMsg}) => {
    return(
        <>
            <p className="error-msg">{errorMsg}</p>
        </>
    )
}

export default ErrorMessage;