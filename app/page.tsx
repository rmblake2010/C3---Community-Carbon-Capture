import InformationCard from "@/components/information-card/information-card.component"



const HomePage = () => {
    return (
    <div className="flex flex-col justify-between min-h-full">
        <InformationCard/>
        <InformationCard/>
        <InformationCard/>
    </div>
    )
}

export default HomePage