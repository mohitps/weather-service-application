// Page that takes an email as input and sends a magic link to that email
function MagicLink() {
    return (
        <div className="magic-link-page" style={{ backgroundColor: '#343d46', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 className= "magic-link-title" style={{ color: '#fff' }}>Passwordless Authentication with MagicLink</h2>
            <div className="md-form" style={{ width: "50%" }}>
                <input className="form-control" type="text" placeholder="Enter Email..." aria-label="Search" />
            </div>
        </div>
    );

}

export default MagicLink;