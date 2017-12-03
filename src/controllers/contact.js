exports.get = (req, res) => {
  res.render('contact', {
    activePage: { contact: true },
    pageTitle: 'Contact',
  });
};
