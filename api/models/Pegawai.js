/**
 * Pegawai.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'siasni',
  tableName: 't_pegawai',
  attributes: {
    nip: {type: 'string'},
    nip_lama: {type: 'string'},
    nama: {type: 'string'},
    tempat_lahir: {type: 'string'}

  }
};
