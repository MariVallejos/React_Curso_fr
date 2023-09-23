

export const CalendarEvent = ({ event }) => { //del evento tomo el title y user

    const { title, user } = event;

    return (
        <>
            <strong>{ title }</strong>
            <span> - { user.name }</span>
        </>
    )
}
