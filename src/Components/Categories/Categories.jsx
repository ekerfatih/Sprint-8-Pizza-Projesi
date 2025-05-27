import Category from "./Category.jsx";

function Categories({categories}) {


    return (
        <div className="categories">
            {categories.map(category => {
                return <Category key={category.id} {...category}/>
            })}
        </div>
    );
}

export default Categories;