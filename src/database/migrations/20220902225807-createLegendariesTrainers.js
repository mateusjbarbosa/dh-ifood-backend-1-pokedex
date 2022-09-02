"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("legendaries_trainers", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      legendaryId: {
        type: Sequelize.UUID,
        references: {
          model: {
            schema: "schema",
            tableName: "legendaries",
          },
          key: "id",
        },
        allowNull: false,
      },
      trainerId: {
        type: Sequelize.UUID,
        references: {
          model: {
            schema: "schema",
            tableName: "trainers",
          },
          key: "id",
        },
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("legendaries_trainers");
  },
};
