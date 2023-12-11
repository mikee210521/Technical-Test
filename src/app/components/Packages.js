import React from "react";
import styles from '@/app/page.module.css'

export default function Packages({onSubmit}) {
    return(
        <div className={styles.modal_content}>
            <div className={styles.inside_pack}>
                <h1>Emprendedor</h1>
                <hr/>
                <p>$ <b>1,000</b> + IVA/mes <br/>
                    1-30 movimientos bancarios al mes
                </p>
                <button
                    onClick={onSubmit}
                    className={styles.pack_btn}
                >Elegir
                </button>
            </div>
            <div className={styles.inside_pack}>
                <h1>Emprendedor Plus</h1>
                <hr/>
                <p>$ <b>2,000</b> + IVA/mes <br/>
                    31-100 movimientos bancarios al mes
                </p>
                <button
                    onClick={onSubmit}
                    className={styles.pack_btn}
                >Elegir
                </button>
            </div>
            <div className={styles.inside_pack}>
                <h1>Empresarial</h1>
                <hr/>
                <p>$ <b>3,000</b> + IVA/mes <br/>
                    101-300 movimientos bancarios al mes
                </p>
                <button
                    onClick={onSubmit}
                    className={styles.pack_btn}
                >Elegir
                </button>
            </div>
            <div className={styles.inside_pack}>
                <h1>Select</h1>
                <hr/>
                <p id={styles.only_p}><b id={styles.only}>Contactanos para hacer un <br/>paquete a tus necesidades</b><br/>
                    +300 movimientos bancarios al mes
                </p>
                <button
                    onClick={onSubmit}
                    className={styles.select_btn}
                >Cotizar paquete
                </button>
            </div>
        </div>
    )
}