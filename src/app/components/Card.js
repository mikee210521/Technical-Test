import styles from '@/app/page.module.css'
import {FcCalculator} from "react-icons/fc";
import {CiPercent} from "react-icons/ci";
import {BiMoneyWithdraw} from "react-icons/bi";
import {GiReceiveMoney} from "react-icons/gi";

export default function Cards() {
    return (
        <div className={styles.container_cards}>
            <div className={styles.inside_container}>
                <span>
                    <FcCalculator className={styles.calculator_icon}/>
                </span><br/>
                        Hacemos tu <br/> contabilidad mensual
            </div>
            <div className={styles.inside_container}>
                <span>
                    <CiPercent className={styles.percent_icon}/>
                </span><br/>
                        Calculamos <br/> tus impuestos
            </div>
            <div className={styles.inside_container}>
                <span>
                    <BiMoneyWithdraw className={styles.money_icon}/>
                </span><br/>
                        Presentamos tus <br/> declaraciones SAT
            </div>
            <div className={styles.inside_container}>
                <span>
                    <GiReceiveMoney className={styles.nomina_icon} />
                </span><br/>
                        Cálculo, timbrado <br/> y envío de nómina
            </div>
        </div>
    )
}
