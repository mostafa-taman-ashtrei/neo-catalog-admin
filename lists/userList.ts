import { relationship, password, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const userList = list({
    ui: {
        listView: {
            initialColumns: ['name', 'posts'],
        },
    },
    fields: {
        name: text({ isRequired: true }),
        email: text({ isRequired: true, isUnique: true }),
        password: password({ isRequired: true }),
        posts: relationship({ ref: 'Post.author', many: true }),
        reviews: relationship({ ref: 'Review.customer', many: true }),
    },
});

export default userList;