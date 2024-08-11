import FeatureCard from "./FeatureCard";
import cpu from "@/app/public/cpu-75.svg"
import database from "@/app/public/data-storage-43.svg"
import cybersecurity from "@/app/public/cybersecurity-1-98.svg"
import maintenance from "@/app/public/data-maintenance-88.svg"
import data from "@/app/public/personal-data-1-45.svg"

export default function FeaturesList() {
    return(
        <div className="flex flex-row flex-wrap justify-evenly py-4">
            <FeatureCard 
                image={cpu}
                title="Modern Hardware"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida arcu est. In nec neque."
            />
            <FeatureCard 
                image={database}
                title="Custamisable Backups"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida arcu est. In nec neque."
            />
            <FeatureCard 
                image={cybersecurity}
                title="Customised Panel"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida arcu est. In nec neque."
            />
            <FeatureCard 
                image={maintenance}
                title="Mod Support"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida arcu est. In nec neque."
            />
            <FeatureCard 
                image={data}
                title="Customer Service"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida arcu est. In nec neque."
            />
        </div>
    )
}