module.exports = (req, res, next) => {
    //obteain role from req.session.user

      const { step2, _id } = req.session.user
      if (!step2) {
        //if false redirect
        return res.redirect(`/auth/signup/student/${_id}`)
      } else {
        return res.status(403).send("Not allowed.");
      }
    }

  