/**
 * @interface DAOBetByUser
 * @description Represents the Data Access Object (DAO) structure for user bets.
 * - Contains properties such as id, userId, betId, name, lastName, email, username, password, encrypt,
 *   createdAt, and updatedAt.
 */
export interface DAOBetByUser {
  id: number;
  userId: string;
  betId: number;
  name: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  encrypt: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * @type DAOBetByUserFindMany
 * @description Represents an array of DAOBetByUser objects, used for querying and returning multiple user bets.
 */
export type DAOBetByUserFindMany = Array<DAOBetByUser>;

/**
 * @type DAOBetByUserFindOne
 * @description Represents a single DAOBetByUser object, used for querying and returning a single user bet.
 */
export type DAOBetByUserFindOne = DAOBetByUser;

/**
 * @type DAOBetByUserCreate
 * @description Represents a DAOBetByUser object, used for creating a new user bet.
 */
export type DAOBetByUserCreate = Omit<
  DAOBetByUser,
  'id' | 'createdAt' | 'updatedAt'
>;

/**
 * @type DAOBetByUserUpdate
 * @description Represents a DAOBetByUser object, used for updating an existing user bet.
 */
export type DAOBetByUserUpdate = Partial<DAOBetByUser>;

/**
 * @type DAOBetByUserDelete
 * @description Represents a DAOBetByUser object, used for deleting an existing user bet.
 */
export type DAOBetByUserDelete = Pick<DAOBetByUser, 'id'>;
