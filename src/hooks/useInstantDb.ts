import { InstaQLEntity, i, init } from '@instantdb/react';

import { env } from '@/lib/env';

const APP_ID = env.instantDbAppId;

const schema = i.schema({
  entities: {
    todos: i.entity({
      text: i.string(),
      done: i.boolean(),
      createdAt: i.number(),
    }),
  },
  rooms: {
    todos: {
      presence: i.entity({}),
    },
  },
});

export type Todo = InstaQLEntity<typeof schema, 'todos'>;

const db = init({ appId: APP_ID, schema });
const room = db.room('todos');

export { db, room };
