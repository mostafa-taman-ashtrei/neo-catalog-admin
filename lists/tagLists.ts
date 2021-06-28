import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const tagList = list({
    ui: {
        isHidden: true,
    },
    fields: {
        name: text(),
        posts: relationship({
            ref: 'Post.tags',
            many: true,
        }),
    },
});

export default tagList;
