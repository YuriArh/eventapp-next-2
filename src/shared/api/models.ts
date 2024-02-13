export * from "./models.gen"; // eslint-disable-line no-restricted-imports

/**
 * Ошибка приложения
 */
export type AppError = {
  /** Код ошибки */
  code: number;
  /** Сообщение */
  message: string;
  /** Описание */
  description: string;
};

/**
 * Вынужденная обертка для некоторых компонентов по данным с API
 * !!! FIXME: more strict types (TotallyNullable not help...) or fix on codegen level
 */
export type VeryMaybe<T> = import("./models.gen").Maybe<Partial<T>>;
