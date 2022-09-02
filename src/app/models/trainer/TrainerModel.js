import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";
import LegendariesTrainers from "../LegendariesTrainers/LegendariesTrainers";
import LegendaryModel from "../legendary/LegendaryModel";

const sequelize = new Sequelize(databaseConfig);

class TrainerModel extends Model {}

TrainerModel.init(
  {
    id: {
      type: Sequelize.UUIDV4(),
      primaryKey: true,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    passwordHash: Sequelize.STRING,
    age: Sequelize.STRING,
    city: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "trainers",
    timestamps: false,
    underscored: true,
  }
);

TrainerModel.belongsToMany(LegendaryModel, { through: LegendariesTrainers });

export default TrainerModel;
