import { useEffect, useState, useCallback } from "react";

const useLocalStorage = (key, defaultValue) => {
  return useStorage(key, defaultValue, window.localStorage);
};

const useStorage = (key, defaultValue, storageObject) => {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue("");
  }, []);

  return [value, setValue, remove];
};

export default useLocalStorage;
