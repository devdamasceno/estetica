import styles from './styles.module.css';

export function Servicos() {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.ContentDescricao}>
          <img src="/iconServico.webp" alt="Serviços" />
          <h1>ESTÉTICA COM SAÚDE</h1>
          <p>Nossa clínica conta com profissionais graduadas e capacitadas
          para atendê-los de forma completa, cuidando do seu corpo de 
          dentro pra fora.</p>
        </div>
        <div className={styles.ContentImagem}>
        </div>
      </div>
    </div>
  )
}
