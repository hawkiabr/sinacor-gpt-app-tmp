import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Quais são os principais componentes do FixGear?",
        value: "Quais são os principais componentes do FixGear?"
    },
    {
        text: "Qual consulta valida se o módulo de Faturamento BMF está instalado?",
        value: "Qual consulta valida se o módulo de Faturamento BMF está instalado?"
    },
    { text: "É possível liquidar contratos comprados a termo?", value: "É possível liquidar contratos comprados a termo?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
