import { createSchema } from '@keystone-next/keystone/schema';
import postList from './lists/postList';
import tagList from './lists/tagLists';
import userList from './lists/userList';

export const lists = createSchema({
  User: userList,
  Post: postList,
  Tag: tagList,
});
