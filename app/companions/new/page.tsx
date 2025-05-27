import CompanionForm from "@/components/CompanionForm";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
    const { userId } = await auth();

    if (!userId) redirect("/sign-in");

    const canCreateCompanion = await newCompanionPermissions();

    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
            {canCreateCompanion ? (
                <article className="w-full gap-4 flex flex-col">
                    <h1>Construção do Companheiro</h1>
                    <CompanionForm />
                </article>
            ) : (
                <article className="companion-limit">
                    <Image
                        src="/images/limit.svg"
                        alt="Companion limit reached"
                        width={360}
                        height={230}
                    />
                    <div className="cta-badge">Aumente seu plano</div>
                    <h1>Você atingiu seu limite!</h1>
                    <p>
                        Você atingiu you limite de companheiro. Aumente seu
                        plano para criar mais companheiros recursos premium. `
                    </p>
                    <Link
                        href="/subscription"
                        className="btn-primary w-full justify-center"
                    >
                        Aumente meu Plano
                    </Link>
                </article>
            )}
        </main>
    );
};

export default NewCompanion;
