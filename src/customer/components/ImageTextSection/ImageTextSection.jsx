import divider from '../../../assets/images/divider.png'
import image1 from '../../../assets/images/fresh-rolls.png'
import image2 from '../../../assets/images/vietnamese-coffee.png'

const ImageTextSection = ({image, description}) => {
    return (
        <div className="my-16 mx-28">
            <img className="w-48 h-auto mx-auto my-10" src={divider} alt="Divider" />
            <h4 className="font-heading text-h4 text-neutral-900 pb-10">Bring the restaurant experience home</h4>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <p className="text-p text-neutral-900 font-regular pb-10 font-body">At Banh Mi & Bites, we’re passionate about sharing the authentic flavors of different parts 
                        of Asia with you. Our carefully curated products make it easy to recreate your favorite 
                        dishes in your own kitchen.
                    </p>
                    <img className="w-full h-[540px]" src={image1} alt="Fresh Rolls" />
                </div>
                {/* Second grid*/}
                <div>
                    <img className="w-full h-[540px]" src={image2} alt="Fresh Rolls" /> 
                    <p className="text-p text-neutral-900 font-regular pt-10 font-body">
                    Whether you're craving a comforting bowl of pho, the rich aroma of Vietnamese coffee, or 
                    the bold kick of sriracha, we’ve got everything you need into your kitchen. Turn every meal into a culinary adventure.
                    </p>
                </div>
            </div>
        </div>
       
    )
}

export default ImageTextSection