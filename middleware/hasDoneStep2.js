module.exports = (req, res, next) => {
    //obteain role from req.session.user

      const { step2, _id } = req.session.user
      if (!step2) {
        //if false redirect
        return res.redirect(`/auth/signup/student/${_id}`)
      } else {
      req.user = req.session.user;
      next();
      }
    }

  