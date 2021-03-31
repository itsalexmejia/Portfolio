// import React from "react"
import * as React from "react"
import TextHeader from "../../components/content/header/header-txt"
import PeopleGrid from "../../components/content/people-grid"
import Layout from "../../components/layout"


const GentePage = () => {

    return (
        <Layout>
            <TextHeader
                headline="Meet our leadership"
                title="Executive Profiles"
                caption="Teamwork makes the dream work"
            />

            <div className="bg-white">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12">
                        <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                            <PeopleGrid 
                                name = "Fernando Espinosa"
                                position = "Chief Executive Officer"
                                description = "Más de 20 años de experiencia en consultoría, como CEO de empresas de ventas y servicios y como director de organizaciones no lucrativas."
                            />
                            <PeopleGrid 
                                name = "Fernando Espinosa"
                                position = "Chief Executive Officer"
                                description = "Más de 20 años de experiencia en consultoría, como CEO de empresas de ventas y servicios y como director de organizaciones no lucrativas."
                            />
                        </ul>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export default GentePage