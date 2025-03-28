import { useState } from "react";

const programmingLanguages = [
    {
        id: 1,
        title: "HTML",
        description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
    },
    {
        id: 2,
        title: "CSS",
        description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere l’aspetto e la formattazione di un documento HTML. Gestisce layout, colori, font e animazioni."
    },
    {
        id: 3,
        title: "JavaScript",
        description: "JavaScript è un linguaggio di programmazione orientato agli eventi che consente di rendere interattive le pagine web. È utilizzato per validazioni, animazioni, richieste asincrone e molto altro."
    },
    {
        id: 4,
        title: "Node.js",
        description: "Node.js è un ambiente di esecuzione JavaScript lato server che consente di creare applicazioni di rete veloci e scalabili. Usa un modello di I/O non bloccante basato su eventi."
    },
    {
        id: 5,
        title: "Express",
        description: "Express è un framework web minimalista per Node.js che semplifica la creazione di API e applicazioni web, fornendo strumenti per la gestione delle richieste, routing e middleware."
    },
    {
        id: 6,
        title: "ReactJS",
        description: "React è una libreria JavaScript per costruire interfacce utente. Utilizza componenti riutilizzabili e una gestione dello stato efficiente per creare SPA dinamiche e performanti."
    }
];



export default function LanguageList() {
    const [isOn, setIsOn] = useState(1)
    return (
        <div className="flex-container">
            <section className="buttons-section">
                {programmingLanguages.map((language) => (

                    <Language
                        key={language.id}
                        title={language.title}
                        isOn={isOn === language.id}
                        handleOn={() => setIsOn(language.id)}
                    >
                        {language.description}
                    </Language>

                ))}
            </section>

            {programmingLanguages.map((language) => (
                isOn === language.id && (
                    <div key={language.id} className="card">
                        <h3>{language.title}</h3>
                        <span>{language.description}</span>
                    </div>
                )
            ))}
        </div>
    )
}

function Language({ title, isOn, handleOn, children }) {
    return (

        <>
            <button className={`btn ${isOn ? 'active' : ''}`} onClick={handleOn}>
                {title}
            </button>

        </>

    )
}