import { axiosWithAuth } from "@/api/interceptors";
import { IUser, TypesUserForm } from "@/types/auth.types";


export interface IProfileResponse {
    user: IUser,
    statistics: {
        label: string,
        value: string
    }[]
}

class UserService {
    private BASE_URL = "/user/profile"

    async getProfile() {
        const res = await axiosWithAuth.get<IProfileResponse>(this.BASE_URL);
        return res.data
    }

    async update(data: TypesUserForm) {
        const res = await axiosWithAuth.put(this.BASE_URL, data);
        return res.data
    }
}

export const userService = new UserService();