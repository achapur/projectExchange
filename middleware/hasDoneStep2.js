module.exports = (req, res, next) => {
    //obteain role from req.session.user
      const { homeCountry } = req.session._home_country;
      if (!homeCountry)) {
        return res.redirect("/auth/signup/step:id")
      } else {
        return res.status(403).send("Not allowed.");
      }
    };
  };
  