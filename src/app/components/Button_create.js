import styles from "@/app/page.module.css";

export default function Button_create({setOpenModal}) {
    return(
        <div>
            <button
                className={styles.waching}
                onClick={
                    ()=> {
                        setOpenModal(true);
                    }
                }
            >
                Ver paquetes
            </button>
        </div>
    )
}