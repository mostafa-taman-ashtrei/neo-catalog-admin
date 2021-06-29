import { text, select, timestamp, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { document } from '@keystone-next/fields-document';

const postList = list({
    fields: {
        title: text(),
        status: select({
            options: [
                { label: 'Published', value: 'published' },
                { label: 'Draft', value: 'draft' },
            ],
            ui: {
                displayMode: 'segmented-control',
            },
        }),
        content: document({
            formatting: true,
            layouts: [
                [1, 1],
                [1, 1, 1],
                [2, 1],
                [1, 2],
                [1, 2, 1],
            ],
            links: true,
            dividers: true,
        }),
        publishDate: timestamp(),
        author: relationship({
            ref: 'User.posts',
            ui: {
                displayMode: 'cards',
                cardFields: ['name', 'email'],
                inlineEdit: { fields: ['name', 'email'] },
                linkToItem: true,
                inlineCreate: { fields: ['name', 'email'] },
            },
        }),
    },
});

export default postList;
