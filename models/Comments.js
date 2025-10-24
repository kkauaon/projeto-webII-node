module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
        commentBody: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    return Comments;
};
