import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Comece aprendendo da sua forma.</div>
            <h2 className="text-3xl font-bold">
                Construa e Personalize com o seu companheiro de aprendizado
            </h2>
            <p>
                Selecione um nome, assunto, voz * personlize - e comece a
                aprender através de conversação de voz que seja natural e
                divertida.
            </p>
            <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
                <Link href="/companions/new">
                <p>Construa um novo companheiro</p></Link>
            </button>
        </section>
    );
};

export default CTA;
