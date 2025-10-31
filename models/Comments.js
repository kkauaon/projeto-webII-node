module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
        commentBody: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    Comments.associate = models => {
        Comments.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false,
            },
        });

        Comments.belongsTo(models.Posts, {
            foreignKey: {
                allowNull: false,
            },
            onDelete: 'CASCADE',
        });
    };

    return Comments;
};
