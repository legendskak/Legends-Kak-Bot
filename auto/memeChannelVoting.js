export default async function (msg, client) {
    const kakMemesChannelID = '843630402811592715';
    const memesChannelID = '705205421631078411';

    const upvoteEmojiID = '849457567502827540';
    const downvoteEmojiID = '849457625128370216';

    if (
        msg.channel.id === memesChannelID ||
        msg.channel.id === kakMemesChannelID
    ) {
        msg.react(upvoteEmojiID).then(() => msg.react(downvoteEmojiID));

        const upvoteFilter = (reaction, user) =>
            reaction.emoji.id === upvoteEmojiID;
        const downvoteFilter = (reaction, user) =>
            reaction.emoji.id === downvoteEmojiID;
        const emojiFilter = (reaction, user) =>
            reaction.emoji.id !== upvoteEmojiID &&
            reaction.emoji.id !== downvoteEmojiID;

        const upvote = msg.createReactionCollector(upvoteFilter, {
            time: 900000,
            dispose: true,
        });
        const downvote = msg.createReactionCollector(downvoteFilter, {
            time: 900000,
            dispose: true,
        });

        const emoji = msg.createReactionCollector(emojiFilter, {
            time: 900000,
            dispose: true,
        });

        upvote.on('collect', async (r) => {
            r.users.cache.forEach((user) => {
                const userId = user.id;

                const userReactions = msg.reactions.cache.filter((reaction) =>
                    reaction.users.cache.has(userId)
                );
                try {
                    for (const reaction of userReactions.values()) {
                        if (
                            reaction.emoji.id === downvoteEmojiID &&
                            userId !== client.user.id
                        ) {
                            reaction.users.remove(userId);
                        }
                    }
                } catch (error) {
                    console.error('Failed to remove reactions.');
                }
            });
        });

        downvote.on('collect', async (r) => {
            r.users.cache.forEach((user) => {
                const userId = user.id;

                const userReactions = msg.reactions.cache.filter((reaction) =>
                    reaction.users.cache.has(userId)
                );
                try {
                    for (const reaction of userReactions.values()) {
                        if (
                            reaction.emoji.id === upvoteEmojiID &&
                            userId !== client.user.id
                        ) {
                            reaction.users.remove(userId);
                        }
                    }
                } catch (error) {
                    console.error(error);
                }
            });
        });

        emoji.on('collect', (r) => {
            r.remove();
        });
    }
}
