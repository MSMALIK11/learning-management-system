import { lmsService } from "../http";
import type { signupformTypes } from "@/types/authTypes";
export const auth = {
    async singup(formData: signupformTypes) {
        return await lmsService.post('/signup', formData)

    },
    async login(formData: signupformTypes) {
        return await lmsService.post('/login', formData)

    },
    async currentuser() {
        return await lmsService.get('/currentUser')
    },
    async userLogout() {
        return await lmsService.get('/logout')
    }

}