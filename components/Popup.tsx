export default function Popup({
  message,
  visible,
}: {
  message: string;
  visible: boolean;
}) {
  if (!visible) return null;

  return (
    <div className="fixed top-0 right-0 bg-green-500 text-white px-4 py-2 m-4 rounded">
      {message}
    </div>
  );
}
