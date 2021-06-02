export default async function (msg) {
    const memesChannelID = '705205421631078411';

    const upvoteEmojiID = '849457567502827540';
    const downvoteEmojiID = '849457625128370216';

    const userId = msg.member.id;

    if (msg.channel.id === memesChannelID) {
        msg.react(upvoteEmojiID).then(() => msg.react(downvoteEmojiID));

        const upvoteFilter = (reaction, user) =>
            reaction.emoji.id === upvoteEmojiID && user.id === userId;
        const downvoteFilter = (reaction, user) =>
            reaction.emoji.id === downvoteEmojiID && user.id === userId;

        const upvote = msg.createReactionCollector(upvoteFilter, {
            time: 900000,
            dispose: true,
        });
        const downvote = msg.createReactionCollector(downvoteFilter, {
            time: 900000,
            dispose: true,
        });

        upvote.on('collect', async (r) => {
            const userReactions = msg.reactions.cache.filter((reaction) =>
                reaction.users.cache.has(userId)
            );
            try {
                for (const reaction of userReactions.values()) {
                    if (reaction.emoji.id === downvoteEmojiID) {
                        reaction.users.remove(userId);
                    }
                }
            } catch (error) {
                console.error('Failed to remove reactions.');
            }
        });

        downvote.on('collect', async (r) => {
            const userReactions = msg.reactions.cache.filter((reaction) =>
                reaction.users.cache.has(userId)
            );
            try {
                for (const reaction of userReactions.values()) {
                    if (reaction.emoji.id === upvoteEmojiID) {
                        reaction.users.remove(userId);
                    }
                }
            } catch (error) {
                console.error('Failed to remove reactions.');
            }
        });
    }
}

//msg.reactions.cache.get('484535447171760141').remove()
