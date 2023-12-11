'use client'
import React from "react";
import styles from '@/app/page.module.css'
import Cards from "@/app/components/Card";
import List from "@/app/components/List";
import Button_create from "@/app/components/Button_create";
import YoutubeVideo from "@/app/components/YoutubeVideo";
import Modal from "@/app/components/Modal";
import Packages from "@/app/components/Packages";
import Tittle from "@/app/components/Tittle";
import Step_Container from "@/app/components/Step_Container";


export default function Home() {
    const [openModal,setOpenModal] =
        React.useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
    };

    return (
        <main className={styles.main}>
            <Tittle/>
              <div>
                  <Cards/>
              </div>
            <section className={styles.information}>
                <YoutubeVideo videoId='OJ5FiH-dl30'/>
                <List/>
            </section>
            <footer className={styles.footer}>
                <Step_Container/>
                <p className={styles.text}>
                    ¿Quieres cambiarte a tu Conta? Nosotros nos encargamos de llevar <br/>
                    a cabo la transición de toda tu contabilidad hasta el día de hoy.
                </p>
                <div className={styles.create_Btn}>
                    <Button_create setOpenModal={setOpenModal} />
                    <button className={styles.static_btn}>
                        Agregar una cita con un contador experto
                    </button>
                </div>
                {openModal && (
                    <Modal>
                        <div>
                            <Packages onSubmit={onSubmit}/>
                        </div>
                    </Modal>
                )}
            </footer>
        </main>
  )
}
