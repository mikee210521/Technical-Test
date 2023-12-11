import styles from "@/app/page.module.css";
import {FaCircleCheck} from "react-icons/fa6";


export default function List() {
    return (
        <ul>
            <li className={styles.items}>
                <h1>Beneficios</h1>
                <p className={styles.data_list}>
                    <h1><FaCircleCheck className={styles.check_icon}/>Automático</h1>
                    <p>Ahorra tiempo al eliminar la tarea de enviar facturas a tu <br/> contador ¡El proceso es automático!.</p>
                </p>
            </li>
            <li className={styles.items}>
                <p className={styles.data_list}>
                    <h1><FaCircleCheck className={styles.check_icon}/>Servicio Oportuno</h1>
                    <p>Comunicación más fácil y efectiva con tu contador <br/> personal.</p>
                </p>
            </li>
            <li className={styles.items}>
                <p className={styles.data_list}>
                    <h1><FaCircleCheck className={styles.check_icon}/>Simplicidad</h1>
                    <p>Información contable en tiempo real.</p>
                </p>
            </li>
            <li className={styles.items}>
                <p className={styles.data_list}>
                    <h1><FaCircleCheck className={styles.check_icon}/>Confiable</h1>
                    <p>Cálculos hechos por uno de nuestros contadores <br/> expertos asignado especialmente a tu negocio.</p>
                </p>
            </li>
        </ul>
    )
}