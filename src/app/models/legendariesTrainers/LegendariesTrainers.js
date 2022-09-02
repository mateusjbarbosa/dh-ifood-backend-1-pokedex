import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../../config/database";
import LegendaryModel from "../legendary/LegendaryModel";
import TrainerModel from "../trainer/TrainerModel";

const sequelize = new Sequelize(databaseConfig);

class LegendariesTrainers extends Model {}

LegendariesTrainers.init(
  {
    id: {
      type: DataTypes.UUIDV4(),
      primaryKey: true,
    },
    legendaryId: {
      type: DataTypes.UUIDV4(),
      references: {
        model: LegendaryModel,
        key: "id",
      },
    },
    trainerId: {
      type: DataTypes.UUIDV4(),
      references: {
        model: TrainerModel,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "legendaries_trainers",
    timestamps: false,
  }
);

export default LegendariesTrainers;
