const { Country } = require("../db");
const { Op } = require("sequelize");

const getCountryByName = async (name) => {
    try {
        let countriesFound = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });
        if (!countriesFound[0]) throw new Error("No hay coincidencias.");
        return countriesFound;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getCountryByName;