import styles from '@/app/page.module.css'
export default function Tittle() {
    return(
        <div className={styles.description}>
            <div>
                <h1 id={styles.letter_tittle}> <span id={styles.letter}>tu</span> Conta</h1>
                <p id={styles.sub_tittle}>Tu Contador en línea</p>
            </div>
            <p id={styles.paragraph}>¡Nuevo Servicio! <br/> Encargate de tu negocio, nosotros de tu contabilidad.</p>
        </div>
    )
}