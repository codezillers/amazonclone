export const BtnPrimary = ({ title }) => (
  <button className="primary-btn">{title}</button>
);

export const BtnSecondary = ({ title }) => (
  <button className="primary-btn" style={{ backgroundColor: "#FA8900" }}>
    {title}
  </button>
);

export const BtnLink = ({ title }) => (
  <button className="btn-link">
    {title}
  </button>
);
