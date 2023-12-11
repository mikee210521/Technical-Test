import styles from "@/app/page.module.css";
import {TbWriting} from "react-icons/tb";
import {BsDatabaseFillCheck} from "react-icons/bs";
import {HiDocumentArrowDown} from "react-icons/hi2";


export default function Step_Container() {
    return(
        <div className={styles.steps}>
            <div className={styles.step_inside}>
                <TbWriting className={styles.icon_step} />
                <h1>Paso 1</h1>
                <p>Agrega tu FIEL</p>
            </div>
            <div  className={styles.step_inside}>
                <BsDatabaseFillCheck className={styles.icon_step} />
                <h1>Paso 2</h1>
                <p>Sincroniza tus <br/>cuentas bancarias</p>
            </div>
            <div  className={styles.step_inside}>
                <HiDocumentArrowDown className={styles.icon_step}/>
                <h1>Paso 3</h1>
                <p>Recibe mensualmente tu <br/> declaración de impuestos</p>
            </div>
        </div>
    )
}