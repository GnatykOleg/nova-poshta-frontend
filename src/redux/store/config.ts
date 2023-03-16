import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

export const middlewareConfig = {
  immutableCheck: { warnAfter: 128 },
  serializableCheck: {
    warnAfter: 128,
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

export const persistConfig = {
  key: "billOfLading",
  storage,
  whitelist: ["billOfLadingState"],
  blacklist: ["_persist", "trackingState", "departmentsState"],
};
