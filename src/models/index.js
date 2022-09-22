'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const clothesSchema = require('./clothes.schema');
const catsSchema = require('./cats.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;


const sequelizeDatabase = new Sequelize(DATABASE_URL);

const ClothesModel = clothesSchema(sequelizeDatabase, DataTypes);
const CatsModel = catsSchema(sequelizeDatabase, DataTypes);



module.exports = {sequelizeDatabase, ClothesModel, CatsModel};
