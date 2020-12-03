import React, { useContext, useState } from 'react';
import { BackendService } from '../backend/BackendService';
import { Trash } from '../backend/generated-rest-client';

interface ContextValueType {
  getTrashList(): Promise<void>;
  postTrash(trash: Blob): Promise<void>;
  trashList: Trash[];
  point: number;
}

export const TrashContext = React.createContext<ContextValueType>({} as ContextValueType);

export const useTrashContext = () => useContext(TrashContext);

export const TrashContextProvider: React.FC = ({ children }) => {

  const [trashList, setTrashList] = useState<Trash[]>([]);

  const contextValue: ContextValueType = {
    getTrashList: async () => {
      const response = await BackendService.getTrashList();
      setTrashList(response);
    },
    postTrash: async (trash) => {
      try {
        const response = await BackendService.postTrash(trash);
        setTrashList([response, ...trashList]);
      } catch (error) {
        alert(error.status);
      }
    },
    trashList,
    point: trashList.reduce((total, trash) => total + trash.point, 0),
  };

  return <TrashContext.Provider value={contextValue}>{children}</TrashContext.Provider>;
};
