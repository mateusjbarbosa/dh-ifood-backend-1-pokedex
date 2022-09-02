import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import LegendariesTrainers from "../LegendariesTrainers/LegendariesTrainers";
import TrainerModel from "../trainer/TrainerModel";

const sequelize = new Sequelize(databaseConfig);

class LegendaryModel extends Model {}

LegendaryModel.init(
  {
    id: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    type: Sequelize.STRING,
    healthPoints: Sequelize.INTEGER,
    specialAttack: Sequelize.INTEGER,
    defense: Sequelize.INTEGER,
    attack: Sequelize.INTEGER,
    experience: Sequelize.INTEGER,
    specialDefense: Sequelize.INTEGER,
  },
  {
    sequelize,
    modelName: "legendaries",
    timestamps: false,
  }
);

LegendaryModel.belongsToMany(TrainerModel, { through: LegendariesTrainers });

export default LegendaryModel;
