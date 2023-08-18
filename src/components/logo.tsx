import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="hover:cursor-pointer">
      <img
        alt="logo"
        className="component-logo"
        src="https://p26-semi-asset.byteimg.com/tos-cn-i-acvclvrq33/788d4c86a223444e9805d9c29a4b0942.png"
      />
    </div>
  );
};
