import { statelessSessions } from "@keystone-next/keystone/session";

let sessionSecret = process.env.SESSION_SECRET || "abc123xyz7899876543210zfwxuvaouoauaoueoueoa";

if (!sessionSecret) {
    if (process.env.NODE_ENV === 'production') {
        throw new Error(
            'The SESSION_SECRET environment variable must be set in production'
        );
    } else {
        sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --';
    }
}

let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const session = statelessSessions({
    maxAge: sessionMaxAge,
    secret: sessionSecret,
});

export default session;