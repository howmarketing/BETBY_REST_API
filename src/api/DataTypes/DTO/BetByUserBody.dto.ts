import { DTOGetBetByUserBody } from '../../../dtos';
import { DAOBetByUser } from '../DAO';
import { IsNotEmpty } from 'class-validator';

// export class DTOGetBetByUserBodyParams implements DTOGetBetByUserBody {
export class DTOGetBetByUserBodyParams {
  @IsNotEmpty()
  betId: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  createdAt: string;
}
export class DTOGetBetByUserBodyEntity implements DTOGetBetByUserBody {
  userId: string;
  betId: number;
  name: string;
  lastName: string;
  email: string;
  username: string;
  password: string;

  constructor(body: DTOGetBetByUserBody) {
    this.userId = body.userId;
    this.betId = body.betId;
    this.name = body.name;
    this.lastName = body.lastName;
    this.email = body.email;
    this.username = body.username;
    this.password = body.password;
  }
  public static fromDTO(body: DTOGetBetByUserBody): DTOGetBetByUserBodyParams {
    return new DTOGetBetByUserBodyEntity(body);
  }
  public toDTO(): DTOGetBetByUserBody {
    return {
      userId: this.userId,
      betId: this.betId,
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
    };
  }
  public toDAO(): DAOBetByUser {
    const DAO: DAOBetByUser = {} as unknown as DAOBetByUser;
    DAO.userId = this.userId;
    DAO.betId = this.betId;
    DAO.name = this.name;
    DAO.lastName = this.lastName;
    DAO.email = this.email;
    DAO.username = this.username;
    DAO.password = this.password;
    return DAO;
  }
}
