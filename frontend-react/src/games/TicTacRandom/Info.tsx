import { useLanguage } from "../../context/useLanguage";

export default function Info() {
  const { t } = useLanguage();

  return (
    <div className="container py-4">
      {/* Descripción */}
      <section className="text-center mb-5">
        <h2 className="fw-bold mb-3">{t.TTRInfoTitle}</h2>
        <div className="row justify-content-center">
          <p className="col-12 col-lg-9 col-xl-8">
            {t.TTR_description}
          </p>
        </div>
      </section>

      {/* Reglas */}
      <section className="mb-5">
        <h2 className="fw-bold text-center mb-4">{t.rules}</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8">
            <p className="">{t.TTR_rules_intro}</p>
            <ul className="list-group">
              {t.TTR_rules.map(({ dado, resultado }) => (
                <li
                  key={dado}
                  className="list-group-item d-flex align-items-center gap-3"
                >
                  <span
                    className="badge bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 32, height: 32, flexShrink: 0 }}
                  >
                    {dado}
                  </span>
                  <span>{resultado}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}