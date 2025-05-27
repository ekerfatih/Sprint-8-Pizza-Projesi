import Select from "./Select.jsx";

function Selects({categories}) {
    return (
        <div className="select">
            <h2 className="satisfy">En çok paketlenen menüler</h2>
            <h1 className="roboto">Acıktıran Kodlara Doyuran Lezzetler</h1>
            <div className="radio-button-select">
                {categories.map(category => {
                    return <Select key={category.id} {...category}/>
                })}
            </div>
        </div>

    )
}

export default Selects;