const RequiredFeild = () => {
    return (
        <>
            <input
                tabIndex={-1}
                className="ReqFeild"
                autoComplete={'' + Math.random()}
                required={true}
                value=''
                onChange={e => console.log(e)}
            />
        </>
    );
}

export default RequiredFeild;