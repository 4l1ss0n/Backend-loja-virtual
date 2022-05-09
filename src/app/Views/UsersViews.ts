interface UsersTypeInput {
    token: string | any;
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email?: string;
    }
}


interface UsersTypeOutput {
    token: string;
    id: string;
    firstName: string;
    lastName: string;
    email?: string;
}

export function UserView(user:UsersTypeInput): UsersTypeOutput {
    return {
        id: user.user.id,
        firstName: user.user.firstName,
        lastName: user.user.lastName,
        email: user.user.email,
        token: user.token
    }
}


export function UserViews(users: UsersTypeInput[]): UsersTypeOutput[] {
    return users.map(user => UserView(user));
}