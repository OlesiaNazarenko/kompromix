import { ThreeDots } from "react-loader-spinner";
export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ThreeDots color="#86b3d1" height={80} width={80} timeout={2000} />
    </div>
  );
}
