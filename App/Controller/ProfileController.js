const renderProfile = (req, res) => {
    res.render("index", { pageTitle: 'Profile' });
}

module.exports = {
    renderProfile
};