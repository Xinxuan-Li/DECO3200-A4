function Navbar({
    onLogoClick,
    onWorldMapClick,
    onEventClick,
    onHelpClick,
    onAboutClick,
}) {
    return (
        <nav className="navbar">
            <div className="logo" onClick={onLogoClick}>
                <h1 className="logo">FOODTOUR</h1>
                <div className="logo-deco-line"></div>
            </div>
            <div className="navlinks">
                <button onClick={onWorldMapClick}>
                    Countries<div className="nav-button-deco-line"></div>
                </button>
                <button onClick={onEventClick}>
                    Events<div className="nav-button-deco-line"></div>
                </button>
                <button onClick={onHelpClick}>
                    Help<div className="nav-button-deco-line"></div>
                </button>
                <button onClick={onAboutClick}>
                    About<div className="nav-button-deco-line"></div>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
