import React from "react"

export const UserCard = ({ userName }: { userName: string }) => {
    return (
        <div style={{ border: '1px solid green', padding: '20px' }}>
            <p> username: {userName ?? 'user'}</p>
            <p> password: {'user123'}</p>
        </div>
    )
}