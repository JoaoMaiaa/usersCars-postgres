const Users = require("../models/Users");

module.exports = {
  async store(req, res) {
    const { name } = req.body;
    const user = await Users.create({ name });
    return res.json(user);
  },

  async index(req, res) {
    const users = await Users.findAll();
    return res.json(users);
  },

  async update(req, res) {
    // os dois modos são válidos
    const { userId } = req.params;
    const { name } = req.body;

    const user = await Users.findByPk(userId);

    if (!user) {
      return res.json({ message: "User not found" });
    }

    await user.update({ name }, { where: { id: userId } });

    // const user = await Users.update(
    //   { name },
    //   {
    //     where: { id: userId },
    //   }
    // );

    return res.json({ message: "User updated sucess" });
    // return res.json({ message: "User updated sucess", user });
  },

  async delete(req, res) {
    // os dois modos são válidos
    const { userId } = req.params;

    // const user = await Users.findByPk(userId);

    // lembrar depois de usar o destroy sem id para ver se ele exclui também
    // await user.destroy(userId);
    // await user.destroy();

    await Users.destroy({
      where: { id: userId },
    });

    return res.json({ message: "User deleted success" });
  },
};
