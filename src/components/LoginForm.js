// import {Note} from "../Note";
import React from 'react'

// eslint-disable-next-line react/prop-types
export default function LoginForm({handleSubmitLogin, handlePasswordChange, password, username, handleUsernameChange}) {
    return (
        <>
            <form onSubmit={handleSubmitLogin}>
                <div>
                    <input
                        type="text"
                        value={username}
                        name='Username'
                        placeholder='username'
                        onChange={handleUsernameChange}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        value={password}
                        name='Password'
                        placeholder='password'
                        onChange={handlePasswordChange}
                    />
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}