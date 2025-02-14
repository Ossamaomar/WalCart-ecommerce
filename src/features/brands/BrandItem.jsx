/* eslint-disable react/prop-types */
function BrandItem({brand}) {
    return (
        <img className="border-2 border-purple-600 rounded-lg" src={brand.image} alt={brand.name} />
    )
}

export default BrandItem
