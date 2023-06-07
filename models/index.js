const User = require('./user.js');
const Favorite = require('./Favorite');
const Review = require('./Review')
User.hasMany(Favorite,
   {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
  foreignKey: 'user_id'
});
// User.hasMany(Review,
//   {
//  foreignKey: 'name',
//  onDelete: 'CASCADE'
// });
// Review.belongsTo(User, {
//   foreignKey: 'name'
// })

module.exports = { User, Favorite, Review,};