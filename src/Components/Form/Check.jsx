function Check({ingredients, onChange, ingredient}) {
    return (
        <div className="checkbox">
            <input
                type="checkbox"
                name="ingredients"
                id={ingredient}
                value={ingredient}
                checked={ingredients.includes(ingredient)}
                onChange={onChange}
                hidden
            />
            <label htmlFor={ingredient} className="checkLabel"/>
            <label htmlFor={ingredient}>{ingredient}</label>

        </div>
    );

}

export default Check;