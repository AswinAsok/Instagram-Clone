const Story = ({img, username}) => {
    return (
        <div>
            <img src={img} alt="" />
            <p>{username}</p>
            <p>Hello World</p>
        </div>
    )
}

export default Story
