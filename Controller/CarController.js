const Users = require("../models/Users");
const Cars = require("../models/Cars");

//o user é sempre primário mesmo no controller de cars

module.exports = {
  async store(req, res) {
    const { userId } = req.params;
    const { name, licensePlate } = req.body;

    const user = await Users.findByPk(userId); // encontra o dono

    if (!user) {
      return res.json("The owner this car don't exist");
    }

    // encontra ou cria o carro
    const [car] = await Cars.findOrCreate({
      where: { name, licensePlate },
    });

    await user.addCars(car); // adiciona na table o carro encontrado/criado na tabla do dono
    return res.json(car);
  },

  async index(req, res) {
    const { userId } = req.params;

    // colocando o id do dono incluindo a tabela cars
    const user = await Users.findByPk(userId, {
      include: { association: "cars" },
    });

    return res.json(user);
  },

  async update(req, res) {
    const { userId } = req.params;
    const { name, licensePlate } = req.body;

    if (!userId) {
      return res.json("User don't exists");
    }

    const car = await Cars.update(
      { name, licensePlate },
      { where: { id: userId } }
    );

    return res.json({ message: "Your car updated success", car });
  },

  async delete(req, res) {
    const { userId } = req.params;

    const car = await Cars.findByPk(userId);

    if (!userId) {
      return res.json("User don't exists");
    }

    await car.destroy();

    res.json({ message: "Your car deleted success", car });
  },
};
