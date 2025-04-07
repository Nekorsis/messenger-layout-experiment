export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface IChannel {
    id: number;
    name: string;
}

export interface IChat {
    id: number;
    name: string;
    avatar: string;
}

export interface IMessage {
    id: number;
    userId: number;
    user: IUser;
    text: string;
    createdAt: Date;
}