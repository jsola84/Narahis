import { Profile } from './profile.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    authStrategy: string;
    profile: Profile;
}
