import styles from "./Info.module.css";
import { useLanguage } from "../../context/useLanguage";
import icPrimeraVictoria from "../../assets/TTR/ic_primera_victoria.svg";
import icVictoriaEstelar from "../../assets/TTR/ic_victoria_estelar.svg";
import icJuegoNiños from "../../assets/TTR/ic_juego_ninos.svg";
import icVictoriaInapelable from "../../assets/TTR/ic_victoria_inapelable.svg";
import icAFK from "../../assets/TTR/ic_afk.svg";
import icEnSerio from "../../assets/TTR/ic_en_serio.svg";

const achievements = [
  { icon: icPrimeraVictoria, titleKey: "TTR_primera_victoria", explKey: "TTR_primera_victoria_expl" },
  { icon: icVictoriaEstelar, titleKey: "TTR_victoria_estelar", explKey: "TTR_victoria_estelar_expl" },
  { icon: icJuegoNiños, titleKey: "TTR_juego_ninos", explKey: "TTR_juego_ninos_expl" },
  { icon: icVictoriaInapelable, titleKey: "TTR_victoria_inapelable", explKey: "TTR_victoria_inapelable_expl" },
  { icon: icAFK, titleKey: null, explKey: "TTR_afk_expl" },
  { icon: icEnSerio, titleKey: "TTR_en_serio", explKey: "TTR_en_serio_expl" },
];

export default function Objetivo() {
  const { t } = useLanguage();

  return (
    <div className="container py-4">
      {/* Objetivo */}
      <section className="text-center mb-5">
        <h2 className="fw-bold mb-4">{t.voidLord}</h2>
        <div className="row justify-content-center">
          <p className="col-12 col-lg-9 col-xl-8">
            {t.TTR_void_lord}
          </p>
        </div>
      </section>

      {/* Logros */}
      <section className="text-center">
        <h2 className="fw-bold mb-4">{t.achivements}</h2>
        <div className="row g-4 justify-content-center">
          {achievements.map(({ icon, titleKey, explKey }, i) => {
            const title = titleKey ? t[titleKey] : "AFK";
            return (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <div
                  className={`${styles.achievementCard} p-3 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center`}
                >
                  <img
                    src={icon}
                    alt={title}
                    className={`${styles.achievementIcon} mb-3`}
                  />
                  <h6 className="mb-1 fw-semibold">{title}</h6>
                  <p className="mb-0 small text-muted">{t[explKey]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}