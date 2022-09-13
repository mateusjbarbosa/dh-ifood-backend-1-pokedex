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

LegendaryModel.belongsToMany(TrainerModel, { through: LegendariesTrainers });
TrainerModel.belongsToMany(LegendaryModel, { through: LegendariesTrainers });

LegendariesTrainers.belongsTo(LegendaryModel, {
  as: "Legendary",
  foreignKey: "legendaryId",
});

LegendariesTrainers.belongsTo(TrainerModel, {
  as: "Trainer",
  foreignKey: "trainerId",
});

export default LegendariesTrainers;
