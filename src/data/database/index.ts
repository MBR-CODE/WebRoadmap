import postgresql from "./postgresql";
import mysql from "./mysql";
import mongodb from "./mongodb";
import redis from "./redis";
import sqlite from "./sqlite";
import firebase from "./firebase";

const database = [
  postgresql,
  mysql,
  mongodb,
  redis,
  sqlite,
  firebase,
];

export default database;