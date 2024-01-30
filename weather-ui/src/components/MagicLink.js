// Page that takes an email as input and sends a magic link to that email
function MagicLink() {
    return (
        <div className="magic-link-page" style={{ backgroundColor: '#343d46', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 className="magic-link-title" style={{ color: '#fff' }}>Passwordless Authentication with MagicLink</h2>
          <form className="email-form" method="POST" action="http://localhost:3000" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <div className="md-form" style={{ width: "50%" }}>
              <input className="form-control" type="text" placeholder="Enter email..." aria-label="Search" />
            </div>
          </form>
        </div>
      );
      

}

export default MagicLink;