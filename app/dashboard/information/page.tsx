import Image from "next/image"
import InformationCard from "@/components/information-card/information-card.component"

const MissionStatement = () => {
    return (
        <div>
            <InformationCard/>
            <hr/>
            <div className="flex justify-around m-5">
                <img src='https://placekitten.com/500/600'></img>
                <img src='https://placekitten.com/500/600'></img>
                {/*
                <Image width={100} height={100} src='' alt="Image of Trees"/>
                <Image width={100} height={100} src='' alt="Image of Trees"/>
                */    
                 }
                </div>
                <hr/>
                <div>
                    <div className="text-center m-5">
                        <h3>Facts about Carbon Sequestration</h3>
                        <p>Carbon Sequestration is the process of taking carbon out of our atmosphere. The most efficient method to do this is through photosynthesis, which is where your plants come in. Photosynthesis is the “breathing” cycle of plants, where carbon (Co2) is taken in (“inhaled”) and converted into plant based sugars that is used to build up plant tissue (leafs, stems, bark, etc.) and integrated into the soil thus fertilizing the soil. Up to 40% of the carbon that is captured by a tree is reintegrated into the soil making plants the go between of the atmosphere and ground.

To be complete carbon aware we need to calculate more that what our carbon footprint is. Carbon sequestration has a large part in how we become carbon neutral. There are plants and trees that are on your property taking in carbon and helping you offset your carbon footprint. The goal for this service is to calculate and present you with how much carbon your trees on your property is taking in. </p>

                    </div>
                    <hr/>
                    <div className="text-center m-5">
                        <h3>Carbon Footprint:</h3>
                        <p>A carbon footprint is the amount of greenhouse gases (Co2 and methane are the big ones) a individual, family, or business is generated due to their actions. This could be from energy consumption (gas and electric) or transportation and how much you travel (fossil fuels). It is estimated that a U.S. Citizen produces 16 tons of carbon in a lifespan. A global average is 4 tons in a average lifespan, making the U.S. the leading average carbon producer. You can easily calculate your carbon footprint to see how much carbon your property offsets.</p>
                    </div>
                </div>

        </div>

    )
}

export default MissionStatement