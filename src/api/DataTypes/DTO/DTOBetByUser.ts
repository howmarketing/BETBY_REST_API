// Import the DAO (Data Access Object) to be used as compliance data to creates the DTO (Data Transfer Object)
import { DAOBetByUser as DAO } from './../';

/**
 * @description Define an array of properties to be omitted from the DAO (Data Access Object).
 * - These properties won't be included in the DTO (Data Transfer Object).
 */
export type OmitDAOPropertiesBetByUserForBodyDTO = [
  'id',
  'encrypt',
  'createdAt',
  'updatedAt',
][number];

export type OmitDAOPropertiesBetByUserForResponseDTO = [
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
/**
 * 
id: true,
userId: true
betId: true,
name: true,
lastName: true,
email: true,
username: true,

password: false,
encrypt: false,
 */
/**
 * @description Define a new type DTOBetByUser using the Omit utility type to exclude
 * - specified properties from the DAO type, creating a refined data structure
for API responses.
 * @description DTO (Data Transfer Object):
 * - This object defines the structure of data that will be transferred in the API response.
 *
 */
export type DTOBetByUser = Omit<DAO, OmitDAOPropertiesBetByUserForBodyDTO>;

export type DTOBetByUserGetRecordsResponse = Array<DAO>;
