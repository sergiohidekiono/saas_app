import React from "react";

import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = () => {
    return (
        <main>
            <h1 className="text-2xl underline">Parceiros Populares</h1>
            <section className="home-section">
                <CompanionCard
                    id="123"
                    name="Neura, a Exploradora Inteligente"
                    topic="Tópico: Rede Neural do Cérebro"
                    subject="Ciência"
                    duration={45}
                    color="#E5D0FF"
                />
                <CompanionCard
                    id="456"
                    name="Countsy, o Mago dos Números"
                    topic="Tópico: Derivadas e Integrais"
                    subject="Matemática"
                    duration={30}
                    color="#ffda6e"
                />
                <CompanionCard
                    id="789"
                    name="Verba, o Construtor de Vocabulário"
                    topic="Tópico: Literatura Inglesa"
                    subject="Vocabulário"
                    duration={30}
                    color="#BDE7FF"
                />
            </section>
            <section className="home-section">
                <CompanionsList />
                <CTA />
            </section>
        </main>
    );
};

export default Page;
