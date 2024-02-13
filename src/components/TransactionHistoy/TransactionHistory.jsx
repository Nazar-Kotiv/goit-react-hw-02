import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((iteam) => (
          <tr key={iteam.id}>
            <td className={css.td}>{iteam.type}</td>
            <td className={css.td}>{iteam.amount}</td>
            <td className={css.td}>{iteam.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
