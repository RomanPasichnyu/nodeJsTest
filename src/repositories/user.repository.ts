import { reader, writer } from "../fs.service";
import { IUser } from "../user.interface";

class UserRepository {
  public async getList(): Promise<IUser[]> {
    return await reader();
  }
  public async create(dto: Partial<IUser>): Promise<IUser> {
    const users = await reader();
    const newUser: IUser = {
      id: users[users.length - 1].id + 1,
      name: dto.name,
    };
    users.push(newUser);
    await writer(users);
    return newUser;
  }
  public async getById(userId: number): Promise<IUser> {
    const users = await reader();
    return users.find((user) => user.id === userId);
  }
  public async updateById(userId: number, dto: Partial<IUser>): Promise<IUser> {
    const { name } = dto;
    const users = await reader();
    const index = users.findIndex((user) => user.id === userId);
    users[index] = { ...users[index], name };
    await writer(users);
    return users[index];
  }
  public async deleteById(userId: number): Promise<void> {
    const users = await reader();
    const index = users.findIndex((user) => user.id === userId);
    users.splice(index, 1);
    await writer(users);
  }
}

export const userRepository = new UserRepository();
