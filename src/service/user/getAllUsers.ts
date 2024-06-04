import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entities";

export const getAllActivatedUsersService = async () => {
    const usersRepository = AppDataSource.getRepository(Users);
    
    // Buscar apenas usuários ativados
    // const activatedUsers = await usersRepository.find({
    //     where: { activate: true },
    // });
    const allUsers = await usersRepository.find();

    // Filtrar os usuários ativados e não ativados
    const activatedUsers = allUsers.filter(user => user.activate);
    const nonActivatedUsers = allUsers.filter(user => !user.activate);

    return { activatedUsers, nonActivatedUsers };

};