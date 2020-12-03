import { Configuration, Middleware, TrashApi, UsersApi } from './generated-rest-client';

const logger: Middleware = {
  pre: async (context) => {
    console.log(`>> ${context.init.method} ${context.url}`, JSON.stringify(context.init));
  },
  post: async (context) => {
    console.log(`<< ${context.response.status} ${context.url}`, JSON.stringify(context.response));
  },
};

const config = new Configuration({
  middleware: [logger],
});

const trashApi = new TrashApi(config);

const usersApi = new UsersApi(config);

const login = async (userName: string, password: string) => {
  return await usersApi.login({ inlineObject: { userName, password } });
};

const logout = async () => {
  return await usersApi.logout();
};

const getTrashList = async () => {
  return await trashApi.getTrashList();
};

const postTrash = async (trash: Blob) => {
  return await trashApi.postTrash({ body: trash });
};

export const BackendService = {
  login,
  logout,
  getTrashList,
  postTrash,
};
