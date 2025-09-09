// Componente de toast de erro (esqueleto)
export default function ErrorToast({ message }) {
  return (
    <div style={{ color: 'red', background: '#fff3f3', padding: 10, borderRadius: 6 }}>
      {message}
    </div>
  );
}
