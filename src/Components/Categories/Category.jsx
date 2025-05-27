function Category({src, content}) {
    return (
        <div className="category">
            <img src={src} alt={content}/>
            <a className="roboto" href="">{content}</a>
        </div>
    )
}

export default Category;