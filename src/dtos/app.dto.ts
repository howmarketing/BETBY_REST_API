import { DAOBetByUser } from 'types/DAOs';
export type PickBetByUserDAOPropertiesBetByUsersDAOBody = [
  'userId',
  'betId',
  'name',
  'lastName',
  'email',
  'username',
  'password',
][number];
export type DTOGetBetByUserBody = Pick<
  DAOBetByUser,
  PickBetByUserDAOPropertiesBetByUsersDAOBody
>;

export type PickBetByUserDAOPropertiesBetByUsersDAOResponse = [
  'id',
  'userId',
  'betId',
  'name',
  'lastName',
  'email',
  'username',
  'createdAt',
  'updatedAt',
][number];
export type DTOGetBetByUserResponse = Pick<
  DAOBetByUser,
  PickBetByUserDAOPropertiesBetByUsersDAOResponse
>;

export type DTOGetRecordsResponse = {
  success: boolean;
  msg: string;
  response: {
    length: number;
    take: number;
    cursor: {
      [P in keyof DAOBetByUser]?: DAOBetByUser[P];
    };
    data: Array<DTOGetBetByUserResponse>;
  };
};
