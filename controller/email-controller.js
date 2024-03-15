import UserEmail from "../model/user-email.js";

export const userSubscribe = async (req, res) => {
  try {
    const email = await UserEmail.findOne({ email: req.body.email });

    if (!email) {
      const newEmail = new UserEmail({ email: req.body.email });
      await newEmail.save();
      return res
        .status(200)
        .json({ msg: "Thanks for subscribing to our newsletter" });
    } else {
      return res
        .status(200)
        .json({ msg: "You have already subscribed to our newsletter" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: `User subscribe error: ${error.message}` });
  }
};
