export default function Card({ children, className = "", ...rest }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
