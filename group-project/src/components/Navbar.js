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
                FOODTOUR
            </div>
            <button onClick={onWorldMapClick}>Countries</button>
            <button onClick={onEventClick}>Events in Sydney</button>
            <button onClick={onHelpClick}>Help</button>
            <button onClick={onAboutClick}>About</button>
        </nav>
    );
}

export default Navbar;
