import styles from "./Legal.module.css";

export default function Cookies() {
  return (
    <div className={styles.gbPage}>
      <section className={`${styles.hero} text-center text-white py-5 mb-5`}>
        <div className="container">
          <span className="badge bg-light text-dark mb-3 px-3 py-2 rounded-pill">
            🍪 Cookies
          </span>

          <h1 className="display-4 fw-bold mb-3">
            Política de Cookies
          </h1>

          <p className="lead mb-0 mx-auto" style={{ maxWidth: 700 }}>
            Información sobre el uso de cookies en este sitio web.
          </p>
        </div>
      </section>

      <div className="container mb-5">
        <div className={`${styles.card} p-5 rounded-4 shadow-sm`}>

          <h2>Uso de cookies</h2>

          <p>
            Actualmente este sitio web no utiliza cookies propias con fines
            publicitarios, analíticos o de seguimiento.
          </p>

          <p>
            Tampoco se instalan cookies destinadas a elaborar perfiles de
            usuario o recopilar información para fines comerciales.
          </p>

          <hr />

          <h2>Cookies técnicas</h2>

          <p>
            El funcionamiento del sitio puede depender de mecanismos técnicos
            propios del navegador o del almacenamiento local necesario para el
            correcto funcionamiento de algunas funcionalidades, como la selección
            del idioma o determinadas preferencias de uso.
          </p>

          <p>
            Estos mecanismos no se utilizan para identificar personalmente al
            usuario ni para realizar seguimiento de su actividad.
          </p>

          <hr />

          <h2>Actualizaciones</h2>

          <p>
            Si en el futuro este sitio incorpora servicios que utilicen cookies,
            esta política será actualizada para informar adecuadamente a los
            usuarios.
          </p>

        </div>
      </div>
    </div>
  );
}
