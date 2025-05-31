function Check({ingredients, onChange, ingredient}) {
    return (
        <div className="checkbox">
            <input
                className="checkboxInput"
                type="checkbox"
                name="ingredients"
                id={ingredient}
                value={ingredient}
                checked={ingredients.includes(ingredient)}
                onChange={onChange}
            />
            <label htmlFor={ingredient} className="checkLabel"/>
            <label htmlFor={ingredient}>{ingredient}</label>
        </div>
    );

}

export default Check;