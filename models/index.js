const User = require('./user');
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
User.hasMany(Review,
  {
 foreignKey: 'user_id',
 onDelete: 'CASCADE'
});
Review.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Favorite, Review,};