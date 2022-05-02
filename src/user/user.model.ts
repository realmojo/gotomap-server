import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  userId: string;

  @Column
  name: string;

  @Column
  profileImage: boolean;
}
